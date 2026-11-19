import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'docs/screenshots');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321/';

const shots = [
  ['desktop-light.png', 1440, 900, 'light'],
  ['desktop-dark.png', 1440, 900, 'dark'],
  ['mobile-light.png', 390, 844, 'light'],
  ['mobile-dark.png', 390, 844, 'dark'],
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const [name, width, height, theme] of shots) {
  await page.setViewportSize({ width, height });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate((t) => {
    localStorage.setItem('theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  }, theme);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(out, name), fullPage: false });
  console.log('wrote', name);
}

await browser.close();
