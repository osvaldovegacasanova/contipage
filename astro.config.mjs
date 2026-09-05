import { readdirSync } from "node:fs";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://continentalandes.com",
  base: "",
  // Redirecciones declaradas aca y no solo en public/_redirects, para que las
  // rutas antiguas tambien funcionen en `npm run dev`, donde Netlify no
  // interviene, y para que el build deje una pagina de respaldo con canonical.
  //
  // Dos mudanzas acumuladas, ambas del 2026-09-05:
  //   1. La entrada de lubricacion cambio de slug al adoptar el titulo de la
  //      version v3.
  //   2. La seccion entera paso de /blog/ a /insights/, para que la URL diga lo
  //      mismo que la barra de navegacion.
  //
  // Un patron comodin del tipo "/blog/[...ruta]" no sirve: en un build estatico
  // Astro necesita rutas concretas y exige getStaticPaths para cualquier patron
  // dinamico. Por eso los articulos se enumeran leyendo la carpeta, de modo que
  // uno nuevo queda cubierto sin tocar este archivo.
  //
  // Lo que queda fuera son los listados por etiqueta y la paginacion antiguos:
  // esos los cubre el comodin /blog/* de public/_redirects, que si acepta splat
  // porque lo resuelve Netlify en produccion y no el build.
  redirects: {
    ...Object.fromEntries(
      readdirSync(new URL("./src/content/insights/", import.meta.url))
        .filter((archivo) => archivo.endsWith(".md"))
        .map((archivo) => {
          const slug = archivo.replace(/\.md$/, "");
          return [`/blog/${slug}`, `/insights/${slug}`];
        }),
    ),
    // Van despues del bloque anterior para pisarlo: el slug viejo del articulo
    // de lubricacion ya no existe como archivo, asi que necesita destino propio.
    "/blog/cada-cuanto-lubricar-un-soplador-centrifugo": "/insights/importancia-de-la-lubricacion-en-un-soplador-centrifugo",
    "/insights/cada-cuanto-lubricar-un-soplador-centrifugo": "/insights/importancia-de-la-lubricacion-en-un-soplador-centrifugo",
    "/blog": "/insights",
  },
  integrations: [
    tailwind(),
    react(),
    // El sitemap se genera en cada build a partir de las rutas reales. Antes era
    // un archivo estatico en public/ que quedo congelado en enero con una sola
    // URL, mientras el sitio crecia a diecisiete paginas.
    sitemap({
      // Paginas internas que robots.txt bloquea, mas la confirmacion del
      // formulario, que no es contenido que deba aparecer en buscadores.
      filter: (pagina) => !/\/(colores|fonts|separadores|contacto\/gracias)\/?$/.test(pagina),
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
});
