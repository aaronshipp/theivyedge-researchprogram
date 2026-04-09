import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'pdfs');

const ARCHETYPE_IDS = [
  'bio_innovator_micro',
  'bio_systems_macro',
  'systems_architect_micro',
  'platform_builder_macro',
  'cultural_analyst_micro',
  'justice_engineer_macro',
  'narrative_scientist_micro',
  'impact_producer_macro',
];

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.jpg':  'image/jpeg',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.ttf':  'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function serveDistFolder(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      if (urlPath === '/' || !extname(urlPath)) urlPath = '/index.html';
      const filePath = join(DIST, urlPath);
      if (existsSync(filePath)) {
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(readFileSync(filePath));
      } else {
        // SPA fallback
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(readFileSync(join(DIST, 'index.html')));
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function main() {
  console.log('Building project...');
  await execAsync('npm run build', { cwd: ROOT });
  console.log('Build complete.');

  if (!existsSync(OUT)) mkdirSync(OUT);

  const PORT = 4174;
  const server = await serveDistFolder(PORT);
  console.log(`Serving dist on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true });

  for (const id of ARCHETYPE_IDS) {
    const url = `http://localhost:${PORT}/?export=${id}`;
    console.log(`Exporting ${id}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 816, height: 1056 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: join(OUT, `${id}.pdf`),
      width: '816px',
      height: '1056px',
      printBackground: true,
    });
    await page.close();
    console.log(`  → pdfs/${id}.pdf`);
  }

  await browser.close();
  server.close();
  console.log('\nAll 8 PDFs exported to pdfs/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
