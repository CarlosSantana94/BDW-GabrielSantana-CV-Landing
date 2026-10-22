// Renders the résumé PDFs and Open Graph images from the built site.
// Run after `npm run build`; outputs land in public/ (committed) and dist/.
import { createServer } from 'node:http';
import { readFile, mkdir, copyFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';
import { existsSync, readdirSync } from 'node:fs';

const DIST = 'dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2' };

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' }).end(body);
  } catch {
    try {
      const body = await readFile(join(DIST, path, 'index.html'));
      res.writeHead(200, { 'content-type': 'text/html' }).end(body);
    } catch { res.writeHead(404).end(); }
  }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

// Uses CHROMIUM_PATH, else a Playwright-managed Chromium (e.g. /opt/pw-browsers), else the system Chrome channel.
const pwDir = process.env.PLAYWRIGHT_BROWSERS_PATH;
const bundled = pwDir && existsSync(pwDir)
  ? readdirSync(pwDir).filter((d) => d.startsWith('chromium-')).map((d) => join(pwDir, d, 'chrome-linux', 'chrome')).find(existsSync)
  : undefined;
const executablePath = process.env.CHROMIUM_PATH || bundled;
const browser = await chromium.launch(executablePath ? { executablePath } : { channel: 'chrome' });
const page = await browser.newPage();
await mkdir('public/cv', { recursive: true });
await mkdir(`${DIST}/cv`, { recursive: true });

for (const lang of ['es', 'en']) {
  await page.goto(`${base}${lang === 'es' ? '' : '/en'}/cv/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const file = `Gabriel-Santana-CV-${lang.toUpperCase()}.pdf`;
  await page.pdf({ path: `public/cv/${file}`, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await copyFile(`public/cv/${file}`, `${DIST}/cv/${file}`);

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(`${base}/og/${lang}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og-${lang}.png` });
  await copyFile(`public/og-${lang}.png`, `${DIST}/og-${lang}.png`);
  await page.setViewportSize({ width: 1280, height: 800 });
  console.log('rendered', lang);
}

await browser.close();
server.close();
