// Renders the Open Graph images from the built site into public/ (committed) and dist/.
// Run after `npm run build`.
import { createServer } from 'node:http';
import { readFile, copyFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { existsSync, readdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const DIST = 'dist';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end(); }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

// Uses CHROMIUM_PATH, else a Playwright-managed Chromium, else the system Chrome channel.
const pwDir = process.env.PLAYWRIGHT_BROWSERS_PATH;
const bundled = pwDir && existsSync(pwDir)
  ? readdirSync(pwDir).filter((d) => d.startsWith('chromium-')).flatMap((d) => ['chrome-linux', 'chrome-linux64'].map((s) => join(pwDir, d, s, 'chrome'))).find(existsSync)
  : undefined;
const executablePath = process.env.CHROMIUM_PATH || bundled;
const browser = await chromium.launch(executablePath ? { executablePath } : { channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const lang of ['es', 'en']) {
  await page.goto(`${base}/og/${lang}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og-${lang}.png` });
  await copyFile(`public/og-${lang}.png`, `${DIST}/og-${lang}.png`);
  console.log('rendered', lang);
}

await browser.close();
server.close();
