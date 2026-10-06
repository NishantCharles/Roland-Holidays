/** Fetches every page and reports missing assets. `npm run smoke` */
import { readdir, readFile } from 'node:fs/promises';

const BASE = process.env.BASE || 'http://localhost:4173';
const pages = (await readdir('.')).filter((f) => f.endsWith('.html')).sort();
let bad = 0;

for (const page of pages) {
    const res  = await fetch(`${BASE}/${page}`);
    const html = await res.text();

    const refs = new Set();
    for (const m of html.matchAll(/(?:src|href|srcset)="(\.\/[^"]+|assets\/[^"]+)"/g)) {
        const clean = m[1].replace(/^\.\//, '').split('?')[0];
        if (/\.(css|js|jpg|jpeg|png|webp|avif|mp4|svg|ico|woff2?)$/i.test(clean)) refs.add(clean);
    }

    const missing = [];
    for (const ref of refs) {
        const r = await fetch(`${BASE}/${ref}`, { method: 'GET' });
        if (!r.ok) missing.push(ref);
    }

    const status = missing.length ? `${missing.length} MISSING` : 'ok';
    console.log(`  ${page.padEnd(26)} ${String(res.status).padEnd(4)} ${String(refs.size).padStart(3)} assets  ${status}`);
    missing.forEach((m) => console.log(`      ✗ ${m}`));
    bad += missing.length;
}

console.log(bad ? `\n${bad} broken references` : '\nAll referenced assets resolve.');
process.exitCode = bad ? 1 : 0;
