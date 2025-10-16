import fs from 'fs';
import path from 'path';

async function main() {
  const sharp = await import('sharp').then(m => m.default || m);
  const root = path.resolve(process.cwd());
  const srcDir = path.join(root, 'src', 'content', 'blog', 'assets');
  const outDir = path.join(root, 'public', 'blog');
  if (!fs.existsSync(srcDir)) {
    console.log(`[images:blog] Source not found: ${srcDir}`);
    return;
  }
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f));
  const tasks = files.map(async (file) => {
    const inPath = path.join(srcDir, file);
    const outPath = path.join(outDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
    try {
      await sharp(inPath)
        .resize(500, 500, { fit: 'cover', position: 'centre' })
        .webp({ quality: 82 })
        .toFile(outPath);
      console.log(`[images:blog] Wrote ${path.relative(root, outPath)}`);
    } catch (e) {
      console.error(`[images:blog] Failed ${file}:`, e.message);
    }
  });
  await Promise.all(tasks);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

