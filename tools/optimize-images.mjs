/**
 * Roland Holidays — image optimisation
 *
 * For every raster image under assets/img:
 *   1. caps width at MAX_WIDTH (nothing on the site renders wider)
 *   2. rewrites the original JPEG/PNG in place as an optimised fallback
 *   3. emits .webp and .avif siblings for <picture> sources
 *
 * Idempotent: a derivative newer than its source is left alone.
 * Run with `npm run images`.
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import sharp from 'sharp';

const ROOT       = 'assets/img';
const MAX_WIDTH  = 1920;
const Q_JPEG     = 80;
const Q_WEBP     = 80;
const Q_AVIF     = 55;
const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png']);

const walk = async (dir) => {
    const out = [];
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) out.push(...await walk(path));
        else out.push(path);
    }
    return out;
};

const mtime = async (path) => {
    try { return (await stat(path)).mtimeMs; } catch { return 0; }
};

const kb = (bytes) => Math.round(bytes / 1024);

const run = async () => {
    const files = (await walk(ROOT)).filter((f) => SOURCE_EXT.has(extname(f).toLowerCase()));
    let before = 0, after = 0, written = 0, skipped = 0;

    for (const file of files) {
        const stem    = join(dirname(file), basename(file, extname(file)));
        const webp    = `${stem}.webp`;
        const avif    = `${stem}.avif`;
        const srcTime = await mtime(file);

        if (await mtime(webp) > srcTime && await mtime(avif) > srcTime) {
            skipped++;
            continue;
        }

        const original = (await stat(file)).size;
        before += original;

        const input    = sharp(file, { failOn: 'none' });
        const meta     = await input.metadata();
        const resize   = meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : null;
        const pipeline = () => {
            const p = sharp(file, { failOn: 'none' }).rotate();
            return resize ? p.resize(resize) : p;
        };

        // Optimised fallback, written in place so no markup has to change.
        const isPng    = extname(file).toLowerCase() === '.png';
        const fallback = isPng
            ? await pipeline().png({ compressionLevel: 9, palette: true }).toBuffer()
            : await pipeline().jpeg({ quality: Q_JPEG, mozjpeg: true, progressive: true }).toBuffer();

        if (fallback.length < original) await writeFile(file, fallback);

        await pipeline().webp({ quality: Q_WEBP, effort: 5 }).toFile(webp);
        await pipeline().avif({ quality: Q_AVIF, effort: 4 }).toFile(avif);

        after += Math.min(fallback.length, original);
        written++;
        process.stdout.write(
            `  ${file.padEnd(46)} ${String(kb(original)).padStart(5)}K → ` +
            `${String(kb(Math.min(fallback.length, original))).padStart(5)}K  ` +
            `webp ${String(kb((await stat(webp)).size)).padStart(5)}K  ` +
            `avif ${String(kb((await stat(avif)).size)).padStart(5)}K\n`
        );
    }

    console.log(`\n${written} processed, ${skipped} up to date`);
    console.log(`fallbacks: ${kb(before)}K → ${kb(after)}K (${Math.round((1 - after / before) * 100)}% smaller)`);
};

run().catch((err) => { console.error(err); process.exit(1); });
