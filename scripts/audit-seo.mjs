/**
 * Auditoría SEO del sitio construido.
 *
 *   npm run seo            audita dist/ y muestra los hallazgos
 *   npm run seo -- --json  devuelve el resultado en JSON
 *
 * Recorre las páginas generadas y revisa, por cada una: title, meta description,
 * canonical, cantidad de <h1>, datos estructurados, atributos alt e indicios de
 * material de pruebas que no debería llegar a producción. Al final compara la
 * cantidad de páginas contra las declaradas en sitemap.xml.
 *
 * Requiere haber corrido `npm run build` antes: se audita el HTML final, no el
 * código fuente, porque es lo que efectivamente ve el buscador.
 *
 * Termina con código 1 si hay hallazgos de severidad alta, para poder encadenarlo
 * en un flujo automático.
 */

import fs from "node:fs";
import path from "node:path";

const DIST = "dist";

// Páginas internas: existen a propósito y están bloqueadas en robots.txt.
const EXCLUIDAS = [/[\\/](colores|fonts|separadores)[\\/]/];

// Umbrales de longitud a partir de los cuales el buscador recorta.
const MAX_TITLE = 65;
const MAX_DESC = 165;

const ALTA = "alta";
const MEDIA = "media";
const BAJA = "baja";

// ---------------------------------------------------------------- utilidades

const leer = (p) => fs.readFileSync(p, "utf8");

function paginas(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) paginas(p, acc);
    else if (e.name === "index.html" && !EXCLUIDAS.some((r) => r.test(p))) acc.push(p);
  }
  return acc;
}

const uno = (re, s) => {
  const m = s.match(re);
  return m ? m[1].trim() : null;
};

const rutaDe = (p) =>
  "/" + path.relative(DIST, path.dirname(p)).split(path.sep).join("/");

// ---------------------------------------------------------------- auditoría

if (!fs.existsSync(DIST)) {
  console.error("No existe dist/. Correr `npm run build` primero.");
  process.exit(1);
}

const archivos = paginas(DIST).sort();
const hallazgos = [];
const anota = (severidad, tipo, ruta, detalle = "") =>
  hallazgos.push({ severidad, tipo, ruta, detalle });

let conDatosEstructurados = 0;
// Las paginas con noindex no van al sitemap por definicion: no cuentan al
// comparar totales.
let noIndexadas = 0;

for (const archivo of archivos) {
  const ruta = rutaDe(archivo) === "/." ? "/" : rutaDe(archivo);
  const s = leer(archivo);

  const title = uno(/<title>(.*?)<\/title>/s, s);
  const desc = uno(/<meta name="description" content="(.*?)"/s, s);
  const canonical = uno(/<link rel="canonical" href="(.*?)"/s, s);
  const h1 = (s.match(/<h1[^>]*>/g) || []).length;
  const ld = (s.match(/application\/ld\+json/g) || []).length;
  const sinAlt = (s.match(/<img(?![^>]*\salt=)[^>]*>/g) || []).length;
  const altVacio = (s.match(/<img[^>]*\salt=""/g) || []).length;

  const noIndexada = /<meta[^>]+name="robots"[^>]+noindex/i.test(s);
  if (noIndexada) noIndexadas++;
  if (ld > 0) conDatosEstructurados++;

  if (!title) anota(ALTA, "sin title", ruta);
  else if (title.length > MAX_TITLE)
    anota(BAJA, "title largo", ruta, `${title.length} caracteres, se recorta en ~${MAX_TITLE}`);

  if (!desc) anota(ALTA, "sin meta description", ruta);
  else if (desc.length > MAX_DESC)
    anota(BAJA, "description larga", ruta, `${desc.length} caracteres, se recorta en ~${MAX_DESC}`);

  if (!canonical) anota(MEDIA, "sin canonical", ruta);
  if (h1 !== 1) anota(MEDIA, "cantidad de H1 distinta de 1", ruta, `hay ${h1}`);
  if (sinAlt) anota(ALTA, "imagenes sin atributo alt", ruta, `${sinAlt} imagen(es)`);

  // alt="" es correcto en imágenes decorativas: se informa, no se marca como error.
  if (altVacio) anota(BAJA, "imagenes con alt vacio", ruta, `${altVacio}, correcto solo si son decorativas`);

  // Las páginas de contenido deberían llevar marcado para el buscador.
  const esContenido = /^\/(sopladores-para|blog\/)/.test(ruta);
  if (esContenido && ld === 0) anota(MEDIA, "sin datos estructurados", ruta);

  // Una pagina fuera de buscadores no deberia figurar en el sitemap.
  if (noIndexada && !/gracias/.test(ruta)) anota(BAJA, "pagina con noindex", ruta);

  // Restos de trabajo en curso que no deberían publicarse.
  if (/experimento|neumorfismo|pagina interna|no forma parte del sitio/i.test(title + " " + desc))
    anota(ALTA, "rastros de material de pruebas", ruta);
}

// ---------------------------------------------------------------- sitemap

// @astrojs/sitemap genera sitemap-index.xml y uno o mas sitemap-N.xml.
const partes = fs.readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
let urlsSitemap = null;
if (partes.length) {
  urlsSitemap = partes.reduce(
    (n, f) => n + (leer(path.join(DIST, f)).match(/<url>/g) || []).length,
    0
  );
  const indexables = archivos.length - noIndexadas;
  if (urlsSitemap < indexables)
    anota(
      ALTA,
      "sitemap incompleto",
      "/sitemap.xml",
      `declara ${urlsSitemap} URL y hay ${indexables} paginas indexables`
    );
} else {
  anota(ALTA, "sin sitemap generado", "/", "revisar la integracion en astro.config.mjs");
}

// ---------------------------------------------------------------- salida

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ paginas: archivos.length, conDatosEstructurados, urlsSitemap, hallazgos }, null, 2));
} else {
  const orden = { [ALTA]: 0, [MEDIA]: 1, [BAJA]: 2 };
  const etiqueta = { [ALTA]: "ALTA ", [MEDIA]: "media", [BAJA]: "baja " };

  console.log("");
  console.log(`AUDITORIA SEO — ${archivos.length} paginas publicas`);
  console.log("=".repeat(64));

  if (!hallazgos.length) {
    console.log("\n  Sin hallazgos.\n");
  } else {
    const porTipo = new Map();
    for (const h of hallazgos) {
      const k = `${h.severidad}|${h.tipo}`;
      if (!porTipo.has(k)) porTipo.set(k, []);
      porTipo.get(k).push(h);
    }
    const claves = [...porTipo.keys()].sort((a, b) => {
      const [sa] = a.split("|");
      const [sb] = b.split("|");
      return orden[sa] - orden[sb] || a.localeCompare(b);
    });
    for (const k of claves) {
      const grupo = porTipo.get(k);
      const [sev, tipo] = k.split("|");
      console.log(`\n  [${etiqueta[sev]}] ${tipo} — ${grupo.length}`);
      for (const h of grupo.slice(0, 8))
        console.log(`      ${h.ruta}${h.detalle ? "  ·  " + h.detalle : ""}`);
      if (grupo.length > 8) console.log(`      ... y ${grupo.length - 8} mas`);
    }
    console.log("");
  }

  console.log("-".repeat(64));
  console.log(`  Datos estructurados: ${conDatosEstructurados} de ${archivos.length} paginas`);
  if (noIndexadas) console.log(`  Paginas con noindex:  ${noIndexadas}`);
  if (urlsSitemap !== null) console.log(`  URLs en sitemap.xml: ${urlsSitemap}`);
  console.log("");
}

const graves = hallazgos.filter((h) => h.severidad === ALTA).length;
if (graves) {
  console.error(`Hallazgos de severidad alta: ${graves}`);
  process.exit(1);
}
