/** Minimal static server for local preview. `npm start` */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';

const PORT = Number(process.env.PORT) || 4173;
const ROOT = process.cwd();
const TYPES = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
    '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif',
    '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.ico': 'image/x-icon',
    '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
};

createServer(async (req, res) => {
    try {
        let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        if (path.endsWith('/')) path += 'index.html';
        const file = join(ROOT, normalize(path).replace(/^(\.\.[/\\])+/, ''));
        if (!file.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }

        const info = await stat(file);
        if (info.isDirectory()) { res.writeHead(302, { Location: path + '/' }).end(); return; }

        res.writeHead(200, {
            'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
            'Content-Length': info.size,
            'Cache-Control': 'no-cache',
        });
        res.end(await readFile(file));
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
    }
}).listen(PORT, () => console.log(`serving ${ROOT} on http://localhost:${PORT}`));
