import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = resolve(root, 'public/og-image.png');
const photo = resolve(root, 'public/images/author.jpg');

const width = 1200;
const height = 630;

const photoBuf = await sharp(photo)
  .resize(320, 320, { fit: 'cover' })
  .png()
  .toBuffer();

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090b0c"/>
      <stop offset="100%" stop-color="#121516"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#5dceb0" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#5dceb0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <text x="72" y="170" font-family="Georgia, serif" font-size="64" fill="#eef2f2">Azeez Ibrahim A.</text>
  <text x="72" y="250" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#5dceb0">Forward Deployed &amp; Platform Engineer</text>
  <text x="72" y="320" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#a5b0b4">Cloud · Payments · AI</text>
  <text x="72" y="540" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#6f7a7e">kunmi02.github.io</text>
</svg>
`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(base)
  .composite([
    {
      input: photoBuf,
      top: 155,
      left: 820,
    },
  ])
  .png()
  .toFile(out);

writeFileSync(resolve(root, 'public/favicon-32.png'), await sharp(photo).resize(32, 32).png().toBuffer());

console.log('Wrote', out);
