/**
 * Roland Holidays — <picture> wiring
 *
 * Wraps every <img> that points at a local raster in a <picture> block with
 * AVIF and WebP sources, leaving the original <img> as the fallback. Only
 * touches an image whose .avif and .webp siblings both exist on disk.
 *
 * Skips <img> inside <script> blocks and anything already in a <picture>.
 * Idempotent. Run with `npm run pictures`.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { extname } from 'node:path';

const RASTER = /\.(jpe?g|png)$/i;

/** Byte ranges covered by <script>…</script>, which must be left alone. */
const scriptRanges = (html) => {
    const ranges = [];
    const re = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    let m;
    while ((m = re.exec(html))) ranges.push([m.index, m.index + m[0].length]);
    return ranges;
};

const inRanges = (pos, ranges) => ranges.some(([a, b]) => pos >= a && pos < b);

/** './assets/img/x.jpg' -> './assets/img/x.avif' plus its on-disk path. */
const sibling = (src, ext) => {
    const swapped = src.replace(RASTER, `.${ext}`);
    const onDisk  = swapped.replace(/^\.?\//, '').split('?')[0];
    return { swapped, onDisk };
};

const run = async () => {
    const files = (await readdir('.')).filter((f) => extname(f) === '.html');
    let totalWrapped = 0;

    for (const file of files) {
        const html    = await readFile(file, 'utf8');
        const skip    = scriptRanges(html);
        let wrapped   = 0;

        const out = html.replace(
            /(^[ \t]*)?<img\b([^>]*?)\ssrc="([^"]*assets\/img\/[^"]+)"([^>]*?)>/gim,
            (match, indent = '', pre, src, post, offset) => {
                if (inRanges(offset, skip)) return match;
                if (!RASTER.test(src)) return match;

                const avif = sibling(src, 'avif');
                const webp = sibling(src, 'webp');
                if (!existsSync(avif.onDisk) || !existsSync(webp.onDisk)) return match;

                wrapped++;
                const pad = indent;
                return (
                    `${pad}<picture>\n` +
                    `${pad}    <source srcset="${avif.swapped}" type="image/avif">\n` +
                    `${pad}    <source srcset="${webp.swapped}" type="image/webp">\n` +
                    `${pad}    <img${pre} src="${src}"${post}>\n` +
                    `${pad}</picture>`
                );
            }
        );

        if (wrapped) {
            await writeFile(file, out);
            console.log(`  ${file.padEnd(26)} ${wrapped} wrapped`);
            totalWrapped += wrapped;
        }
    }
    console.log(`\n${totalWrapped} <img> elements wrapped in <picture>`);
};

run().catch((err) => { console.error(err); process.exit(1); });
