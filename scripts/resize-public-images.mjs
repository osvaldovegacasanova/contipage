import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd());
const imgDir = path.join(root, "public", "images");

// [filename, maxWidth] — height scales proportionally
// Service thumbnails displayed at 96px (2x → 192px target)
// Product images displayed at ~392px (2x → 784px target)
const targets = [
  ["puesta_en_marcha2.webp",            200],
  ["mantenimiento.webp",                200],
  ["capacidad_tecnica.webp",            200],
  ["slider42-02.jpg",                   200],
  ["services-respuestos_400_533.jpg",   200],
  ["singlestage_draw.webp",             800],
  ["multistage_draw.webp",              800],
  ["gasboosters.webp",                  800],
  ["PLAQUETTE TC25.webp",               800],
  ["TCH25 PARTES.webp",                 800],
];

async function main() {
  const sharp = await import("sharp").then((m) => m.default || m);

  for (const [file, maxWidth] of targets) {
    const filePath = path.join(imgDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`[images:public] Skipping (not found): ${file}`);
      continue;
    }
    const input = fs.readFileSync(filePath);
    const meta = await sharp(input).metadata();
    if (meta.width <= maxWidth) {
      console.log(`[images:public] Already small enough: ${file} (${meta.width}px)`);
      continue;
    }
    const output = await sharp(input).resize(maxWidth, null, { withoutEnlargement: true }).toBuffer();
    fs.writeFileSync(filePath, output);
    const after = await sharp(output).metadata();
    console.log(`[images:public] ${file}: ${meta.width}px → ${after.width}px`);
  }
  console.log("[images:public] Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
