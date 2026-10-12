/**
 * Roland Holidays — destination page generator
 *
 * Builds a full destination page for every entry in data/destinations.js that
 * has spots in data/spots.js, using rajasthan.html as the template. Each page
 * carries the same itinerary builder as the India state pages: selectable
 * spot cards, trip inputs and the WhatsApp handoff.
 *
 * Skipped: the India states (tools/build-state-pages.mjs owns those, from the
 * richer india-states.js records) and the three hand-built pages — india.html,
 * bangkok.html and maldives.html.
 *
 * Idempotent. Run with `npm run destinations`.
 */
import { readFile, writeFile } from 'node:fs/promises';

const TEMPLATE = 'rajasthan.html';
const SITE     = 'https://nishantcharles.github.io/Roland-Holidays';
const BESPOKE  = new Set(['india', 'thailand', 'maldives']);

const evalFile = async (path, pick) => {
    const src   = await readFile(path, 'utf8');
    const scope = {};
    new Function('scope', src.replace(/^function[\s\S]*/m, '') + `; scope.v = ${pick};`)(scope);
    return scope.v;
};

/** Remove a block delimited by an opening line and its matching </div>. */
const stripBlock = (html, openMatch) => {
    const lines = html.split('\n');
    const start = lines.findIndex((l) => l.includes(openMatch));
    if (start === -1) return html;
    let depth = 0, end = -1;
    for (let i = start; i < lines.length; i++) {
        depth += (lines[i].match(/<div\b/g) || []).length - (lines[i].match(/<\/div>/g) || []).length;
        if (i > start && depth <= 0) { end = i; break; }
    }
    if (end === -1) return html;
    lines.splice(start, end - start + 1);
    return lines.join('\n');
};

/** Replace the gallery's hardcoded tiles with a container the renderer fills. */
const emptyGallery = (html) => {
    // The state generator shares this template and may already have emptied it.
    if (html.includes('id="destGalleryGrid"')) return html;
    const lines = html.split('\n');
    const start = lines.findIndex((l) => l.includes('<div class="dest-gallery">'));
    if (start === -1) throw new Error('dest-gallery not found');
    let depth = 0, end = -1;
    for (let i = start; i < lines.length; i++) {
        depth += (lines[i].match(/<div\b/g) || []).length - (lines[i].match(/<\/div>/g) || []).length;
        if (i > start && depth <= 0) { end = i; break; }
    }
    if (end === -1) throw new Error('unbalanced dest-gallery');
    const indent = lines[start].match(/^\s*/)[0];
    lines.splice(start, end - start + 1, `${indent}<div class="dest-gallery" id="destGalleryGrid"></div>`);
    return lines.join('\n');
};

/** Remove the season band (a div plus its inner container), depth-aware. */
const stripSeasonBand = (html) => {
    const lines = html.split('\n');
    const start = lines.findIndex((l) => l.includes('class="ds-season-banner"'));
    if (start === -1) return html;
    let depth = 0, end = -1;
    for (let i = start; i < lines.length; i++) {
        depth += (lines[i].match(/<div\b/g) || []).length - (lines[i].match(/<\/div>/g) || []).length;
        if (i > start && depth <= 0) { end = i; break; }
    }
    if (end === -1) return html;
    // take the preceding comment line with it
    const from = (lines[start - 1] || '').includes('Seasonal availability') ? start - 1 : start;
    lines.splice(from, end - from + 1);
    return lines.join('\n');
};

const build = async () => {
    const destinations = await evalFile('assets/js/data/destinations.js', 'ROLAND_DESTINATIONS');
    const spots        = await evalFile('assets/js/data/spots.js', 'ROLAND_SPOTS');
    const states       = await evalFile('assets/js/india-states.js', 'INDIA_STATES');
    const stateSlugs   = new Set(states.map((s) => s.slug));

    let base = await readFile(TEMPLATE, 'utf8');

    // The #holidays block is display:none with no nav entry — dead on every
    // page. Drop it rather than carry India packages onto Norway.
    base = stripBlock(base, 'id="holidays"');
    base = emptyGallery(base);

    // Gallery tiles and the lightbox array both come from the spots now.
    // Already swapped if the state generator ran first.
    base = base.replace(/        var galleryImages = \[[\s\S]*?\];/,
        '        var galleryImages = renderDestinationGallery(\n' +
        '            document.getElementById(\'destGalleryGrid\'), window.ROLAND_PAGE_SLUG) || [];');

    // Swap the India-state renderer for the general one.
    base = base.replace(/<script>renderStateCitySpots\([^<]*<\/script>/,
        '<script>renderDestinationSpots(document.getElementById(\'builderCitiesGrid\'), window.ROLAND_PAGE_SLUG);</script>');

    // Strip any copies the previous run left in the template before adding
    // ours, or the tags multiply on every build.
    base = base.replace(/\s*<script src="\.\/assets\/js\/(data\/(spots|destinations)|destination-spots|india-states)\.js"><\/script>/g, '');

    // Load the spot data and renderer in <head>: an inline script in the body
    // builds galleryImages, so these must already be defined by then.
    base = base.replace(/<\/head>/,
        '    <script src="./assets/js/data/destinations.js"></script>\n' +
        '    <script src="./assets/js/data/spots.js"></script>\n' +
        '    <script src="./assets/js/destination-spots.js"></script>\n' +
        '</head>');

    if (!base.includes('destination-spots.js')) throw new Error('renderer script not injected');

    // rajasthan.html is both template and output, so it carries whatever slug
    // the last run wrote. Strip it before inserting this page's, or two
    // assignments land and the template's wins.
    base = base.replace(/\s*<script>window\.ROLAND_PAGE_SLUG = "[^"]*";<\/script>/g, '');

    // Drop any canonical the previous run baked into the template.
    base = base.replace(/\s*<link rel="canonical"[^>]*>/g, '');

    // Which months we recommend each destination for — this is what makes the
    // "Best Time to Visit" band real rather than filler.
    const months = await evalFile('assets/js/data/months.js', 'ROLAND_MONTHS');
    const monthsFor = {};
    for (const key of months.order) {
        const m = months[key];
        const lists = m.groups ? m.groups.map((g) => g.list) : [m.list];
        for (const list of lists) {
            for (const entry of list) {
                (monthsFor[entry.slug] = monthsFor[entry.slug] || []).push(m.name);
            }
        }
    }

    const targets = Object.keys(destinations).filter(
        (slug) => slug !== 'get' && spots[slug] && !stateSlugs.has(slug) && !BESPOKE.has(slug)
    );

    let built = 0;
    for (const slug of targets) {
        const d        = destinations[slug];
        const list     = spots[slug];
        const parent   = d.parent ? destinations[d.parent] : null;
        const bestMonths = monthsFor[slug] || [];
        const heroImg  = d.img
            ? `https://images.unsplash.com/${d.img}?auto=format&fit=crop&w=1920&q=80`
            : null;
        const heroCss  = heroImg
            ? `linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 13%)), url(${heroImg})`
            : 'linear-gradient(135deg, var(--ds-color-primary), var(--ds-color-sky))';

        let out = base
            .replace(/<title>[^<]*<\/title>/,
                     `<title>${d.name} – Destination Guide | Roland Holidays</title>`)
            .replace(/<meta name="description" content="[^"]*">/,
                     `<meta name="description" content="${d.name} travel guide — ${d.desc} Build your own itinerary from ${list.length} places and send it to Roland Holidays on WhatsApp.">`)
            .replace(/<meta name="keywords" content="[^"]*">/,
                     `<meta name="keywords" content="${d.name} tours, ${d.name} holidays, ${d.name} itinerary, ${d.name} travel agents">`)
            .replace(/<link rel="icon"/,
                     `<link rel="canonical" href="${SITE}/${slug}.html">\n    <link rel="icon"`)
            .replace(/style="background:linear-gradient\(rgb\(0 0 0 \/ 20%\), rgb\(0 0 0 \/ 13%\)\), url\([^)]*\);/,
                     `style="background:${heroCss};`)
            .replace(/(<h1 class="ds-page-title"[^>]*>)[^<]*(<\/h1>)/,
                     `$1${d.name} – Destination Guide$2`)
            .replace(/(<li class="active-item" id="breadcrumbActiveItem">)[^<]*(<\/li>)/,
                     `$1${d.name}$2`)
            .replace(/<li><a href="india\.html">India<\/a><\/li>/,
                     parent ? `<li><a href="${parent.page || parent.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html'}">${parent.name}</a></li>`
                            : '<li><a href="destinations.html">Destinations</a></li>')
            .replace(/<span>Best Time to Visit: [^<]*<\/span>/,
                     bestMonths.length
                         ? `<span>Best Time to Visit: ${bestMonths.join(', ')}</span>`
                         : '<span>Best Time to Visit: ask us for the ideal month</span>')
            .replace(/<h3 class="section-h3-bold">India Photo Gallery<\/h3>/,
                     `<h3 class="section-h3-bold">${d.name} Photo Gallery</h3>`)
            .replace(/<p>A visual showcase of India's[^<]*<\/p>/,
                     `<p>A visual showcase of ${d.name} — the places our itineraries are built around.</p>`)
            .replace(/<span class="ds-dest-quote-tag">Rajasthan<\/span>/,
                     `<span class="ds-dest-quote-tag">${d.name}</span>`)
            .replace(/<p>"The heritage trail through Rajasthan's[^<]*<\/p>/,
                     `<p>"Our ${d.name} trip was planned around exactly what we wanted to see — nothing rushed, nothing wasted."</p>`)
            .replace(/<body([^>]*)data-page-key="[a-z_-]+"/, `<body$1data-page-key="${slug}"`);

        // No months recommended (a parent country, or one the month data does
        // not cover) — drop the band rather than show filler.
        if (!bestMonths.length) {
            out = stripSeasonBand(out);
        }

        // The slug the renderers read.
        out = out.replace(/(<meta name="author"[^>]*>)/,
            `$1\n    <script>window.ROLAND_PAGE_SLUG = ${JSON.stringify(slug)};</script>`);

        if (!out.includes('ROLAND_PAGE_SLUG =')) throw new Error(`${slug}: page slug not set`);
        if (out.includes('India Photo Gallery'))  throw new Error(`${slug}: gallery heading not replaced`);
        if (out.includes('id="holidays"'))        throw new Error(`${slug}: dead holidays block survived`);

        await writeFile(`${slug}.html`, out);
        built++;
    }

    console.log(`${built} destination pages built from ${TEMPLATE}`);
    console.log(`skipped: ${states.length} India states (npm run states) + ${BESPOKE.size} hand-built pages`);
};

build().catch((err) => { console.error(err.message); process.exit(1); });
