import puppeteer from 'puppeteer';
import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const outDir = fileURLToPath(new URL('./temporary screenshots/', import.meta.url));

await mkdir(outDir, { recursive: true });

let n = 1;
try {
  const files = await readdir(outDir);
  const nums = files
    .map((f) => f.match(/^screenshot-(\d+)/))
    .filter(Boolean)
    .map((m) => parseInt(m[1], 10));
  if (nums.length) n = Math.max(...nums) + 1;
} catch {}

const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const out = outDir + name;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

// Scroll through the full page to trigger IntersectionObserver reveals, then return to top
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 200;
    const timer = setInterval(() => {
      window.scrollTo(0, y);
      y += step;
      if (y >= document.body.scrollHeight + 800) { clearInterval(timer); resolve(); }
    }, 80);
  });
});
await new Promise((r) => setTimeout(r, 400));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 1000));
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('Saved', out);
