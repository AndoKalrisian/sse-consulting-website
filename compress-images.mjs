import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, 'assets/images');
const src = path.join(root, 'source_images');
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.png'))) {
  const out = path.join(dir, f.replace(/\.png$/, '.webp'));
  const isPhoto = f.startsWith('profile');
  // The profile photo displays at 224px, so 2x (512px) is plenty; covers stay at 1600px.
  let img = sharp(path.join(dir, f));
  if (isPhoto) img = img.resize(512, 512);
  await img.webp({ quality: 82 }).toFile(out);
  fs.renameSync(path.join(dir, f), path.join(src, f));
  console.log(f, '->', path.basename(out), (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
}
