/**
 * Roland Holidays — India state page generator
 *
 * Builds a full destination page for every state in assets/js/india-states.js,
 * using rajasthan.html as the template. Each page gets the same itinerary
 * builder: selectable spot cards, pax/hotel/date inputs and the WhatsApp
 * handoff. The spots themselves come from the state's `cities`.
 *
 * rajasthan.html is both template and output, so regenerating it is a no-op.
 * Idempotent. Run with `npm run states`.
 */
import { readFile, writeFile } from 'node:fs/promises';

const TEMPLATE = 'rajasthan.html';
const SITE     = 'https://nishantcharles.github.io/Roland-Holidays';

const loadStates = async () => {
    const src = await readFile('assets/js/india-states.js', 'utf8');
    const data = src.replace(/^function[\s\S]*/m, '');
    const scope = {};
    new Function('scope', data + '; scope.INDIA_STATES = INDIA_STATES;')(scope);
    return scope.INDIA_STATES;
};

const unsplash = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const build = async () => {
    const states   = await loadStates();
    const template = await readFile(TEMPLATE, 'utf8');
    const raj      = states.find((s) => s.slug === 'rajasthan');

    // Replace the hardcoded lightbox gallery with one built from the state's
    // own cities. The template's tiles pointed at img.magnific.com, including
    // one signed URL that expired in June 2026.
    const emptyGallery = (html) => {
        const lines = html.split('\n');
        const start = lines.findIndex((l) => l.includes('<div class="dest-gallery">'));
        if (start === -1) return html;
        let depth = 0, end = -1;
        for (let i = start; i < lines.length; i++) {
            depth += (lines[i].match(/<div\b/g) || []).length - (lines[i].match(/<\/div>/g) || []).length;
            if (i > start && depth <= 0) { end = i; break; }
        }
        if (end === -1) return html;
        const indent = lines[start].match(/^\s*/)[0];
        lines.splice(start, end - start + 1, `${indent}<div class="dest-gallery" id="destGalleryGrid"></div>`);
        return lines.join('\n');
    };

    let base = emptyGallery(template);
    base = base.replace(/        var galleryImages = \[[\s\S]*?\];/,
        '        var galleryImages = renderDestinationGallery(\n' +
        '            document.getElementById(\'destGalleryGrid\'), window.ROLAND_PAGE_SLUG) || [];');
    // Strip any copies the previous run left in the template before adding
    // ours, or the tags multiply on every build.
    base = base.replace(/\s*<script src="\.\/assets\/js\/(data\/(spots|destinations)|destination-spots|india-states)\.js"><\/script>/g, '');

    // These must be defined before the inline body script builds galleryImages.
    base = base.replace(/<\/head>/,
        '    <script src="./assets/js/india-states.js"></script>\n' +
        '    <script src="./assets/js/data/spots.js"></script>\n' +
        '    <script src="./assets/js/destination-spots.js"></script>\n' +
        '</head>');

    // rajasthan.html is both template and output, so it carries whatever slug
    // the last run wrote. Strip it before inserting this page's, or two
    // assignments land and the template's wins.
    base = base.replace(/\s*<script>window\.ROLAND_PAGE_SLUG = "[^"]*";<\/script>/g, '');

    // Drop any canonical the previous run baked into the template.
    base = base.replace(/\s*<link rel="canonical"[^>]*>/g, '');

    for (const st of states) {
        const heroUrl = st.hero ? st.hero : unsplash(st.img, 1920);
        const firstCity = st.cities[0].name;

        let out = base
            // identity + metadata
            .replace(/<title>[^<]*<\/title>/,
                     `<title>${st.name} – Destination Guide | Roland Holidays</title>`)
            .replace(/<meta name="description" content="[^"]*">/,
                     `<meta name="description" content="${st.name} travel guide — ${st.tagline}. Build your own itinerary from ${st.cities.length} destinations and send it straight to Roland Holidays on WhatsApp.">`)
            .replace(/<link rel="icon"/,
                     `<link rel="canonical" href="${SITE}/${st.slug}.html">\n    <link rel="icon"`)

            // hero
            .replace(/url\(assets\/img\/rj\.jpg\)/, `url(${heroUrl})`)
            .replace(/(<h1 class="ds-page-title"[^>]*>)[^<]*(<\/h1>)/,
                     `$1${st.name} – Destination Guide$2`)
            .replace(/(<li class="active-item" id="breadcrumbActiveItem">)[^<]*(<\/li>)/,
                     `$1${st.name}$2`)
            .replace(/<span>Best Time to Visit: [^<]*<\/span>/,
                     `<span>Best Time to Visit: ${st.season}</span>`)

            // section labels + testimonial
            .replace(/<div class="top-bar"><h6>Rajasthan Heritage<\/h6><\/div>/,
                     `<div class="top-bar"><h6>${st.name} Highlights</h6></div>`)
            .replace(/<div class="gallery-caption-bar">Jaipur – Pink City<\/div>/,
                     `<div class="gallery-caption-bar">${firstCity}</div>`)
            .replace(/<span class="ds-dest-quote-tag">Rajasthan<\/span>/,
                     `<span class="ds-dest-quote-tag">${st.name}</span>`)
            .replace(/<p>"The heritage trail through Rajasthan's[^<]*<\/p>/,
                     `<p>"Our ${st.name} trip was planned around exactly what we wanted to see — nothing rushed, nothing wasted."</p>`)

            // the builder reads its spots from this slug
            .replace(/renderStateCitySpots\(document\.getElementById\('builderCitiesGrid'\), '[a-z-]+'\)/,
                     `renderStateCitySpots(document.getElementById('builderCitiesGrid'), '${st.slug}')`)

            // body key, for live-editor scoping
            .replace(/<body([^>]*)data-page-key="[a-z-]+"/, `<body$1data-page-key="${st.slug}"`)
            .replace(/(<meta name="author"[^>]*>)/, `$1\n    <script>window.ROLAND_PAGE_SLUG = ${JSON.stringify(st.slug)};</script>`);

        // Guard: the builder must be wired to this state, not left on the template's.
        if (!out.includes(`'${st.slug}')`)) throw new Error(`${st.slug}: builder slug not substituted`);
        if (!out.includes('id="builderCitiesGrid"')) throw new Error(`${st.slug}: builder grid missing`);

        await writeFile(st.page, out);
        console.log(`  ${st.page.padEnd(24)} ${String(st.cities.length).padStart(2)} spots   ${st.season}`);
    }
    console.log(`\n${states.length} state pages built from ${TEMPLATE}`);
};

build().catch((err) => { console.error(err.message); process.exit(1); });
