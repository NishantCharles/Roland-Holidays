/**
 * Roland Holidays — month page generator
 *
 * Builds the twelve month pages from january.html, which stays the template.
 * Each output is a real file with its own title, meta description and
 * canonical URL (these pages are the SEO surface for "where to travel in X"),
 * but all content is rendered at runtime from assets/js/data/.
 *
 * Idempotent — re-run after changing the template or the data.
 * Run with `npm run months`.
 */
import { readFile, writeFile } from 'node:fs/promises';

const TEMPLATE = 'january.html';
const SITE     = 'https://nishantcharles.github.io/Roland-Holidays';

const MONTHS = [
    ['january',   'January'],   ['february',  'February'], ['march',     'March'],
    ['april',     'April'],     ['may',       'May'],      ['june',      'June'],
    ['july',      'July'],      ['august',    'August'],   ['september', 'September'],
    ['october',   'October'],   ['november',  'November'], ['december',  'December'],
];

/* Replace the hardcoded mosaic block with the container the renderer fills. */
const emptyMosaic = (html) => {
    // Already emptied by a previous run: the container is a single closed line,
    // and re-running the depth walk below would swallow the section after it.
    if (html.includes('id="monthDestinationCards"')) return html;

    const lines = html.split('\n');
    const start = lines.findIndex((l) => l.includes('ds-mosaic-layout'));
    if (start === -1) throw new Error('ds-mosaic-layout not found in template');

    let depth = 0, end = -1;
    for (let i = start; i < lines.length; i++) {
        depth += (lines[i].match(/<div\b/g) || []).length - (lines[i].match(/<\/div>/g) || []).length;
        if (i > start && depth <= 0) { end = i; break; }
    }
    if (end === -1) throw new Error('unbalanced ds-mosaic-layout');

    const indent = lines[start].match(/^\s*/)[0];
    lines.splice(start, end - start + 1, `${indent}<div class="ds-mosaic-layout text-start" id="monthDestinationCards"></div>`);
    return lines.join('\n');
};

const build = async () => {
    let base = await readFile(TEMPLATE, 'utf8');
    base = emptyMosaic(base);

    // Give the renderer its hooks.
    base = base
        .replace(/<section class="breadcrumb-section bg-size blur-up lazyloaded"\n\s*style="background:[^"]*"/,
                 '<section class="breadcrumb-section bg-size blur-up lazyloaded" id="monthHeroBg"\n       style="background-size: cover; background-position: center center; background-repeat: no-repeat;"')
        .replace(/<h1 class="ds-page-title">[^<]*<\/h1>/,
                 '<h1 class="ds-page-title" id="monthHeaderTitle">Where to Travel</h1>')
        .replace(/<li class="active-item">January<\/li>/,
                 '<li class="active-item" id="monthBreadcrumbItem">January</li>')
        .replace(/<span>Best Time to Visit: [^<]*<\/span>/,
                 '<span>Best Time to Visit: <span id="monthSeasonRange">—</span></span>')
        .replace(/<h2 class="ds-heading-3xl mb-2">Recommended Destinations <span>in January<\/span><\/h2>/,
                 '<h2 class="ds-heading-3xl mb-2">Recommended Destinations <span id="monthHeaderShort">this month</span></h2>')
        .replace(/(<p class="text-muted max-w-xl mx-auto mb-2">)[^<]*(<\/p>)/,
                 '$1<span id="monthIntro"></span>$2');

    if (!base.includes('id="monthDestinationCards"')) throw new Error('mosaic container missing');
    if (!base.includes('id="monthHeroBg"'))           throw new Error('hero hook missing');

    // Strip the previous run's copies before re-adding, and normalise the blank
    // line the strip leaves behind, so repeated builds are byte-identical.
    base = base.replace(/\s*<!-- Month data \+ renderer -->/g, '')
               .replace(/\s*<script src="\.\/assets\/js\/(data\/(destinations|months)|month-render)\.js"><\/script>/g, '')
               .replace(/\n{3,}/g, '\n\n');

    // Load the data layer and renderer ahead of the design-system engine.
    const scripts =
        '    <!-- Month data + renderer -->\n' +
        '    <script src="./assets/js/data/destinations.js"></script>\n' +
        '    <script src="./assets/js/data/months.js"></script>\n' +
        '    <script src="./assets/js/month-render.js"></script>\n';
    base = base.replace(/(\s*)<script src="\.\/assets\/js\/design-system\.js"><\/script>/,
                        `\n${scripts}$1<script src="./assets/js/design-system.js"></script>`);
    if (!base.includes('month-render.js')) throw new Error('renderer script not injected');

    // Drop any canonical the previous run baked into the template.
    base = base.replace(/\s*<link rel="canonical"[^>]*>/g, '');

    for (const [slug, name] of MONTHS) {
        let out = base
            .replace(/<body data-page-key="january">/, `<body data-page-key="${slug}" data-month="${slug}">`)
            .replace(/<title>[^<]*<\/title>/,
                     `<title>Where to Travel in ${name} | Roland Holidays</title>`)
            .replace(/<meta name="description" content="[^"]*">/,
                     `<meta name="description" content="Where to travel in ${name} — our recommended destinations, why they suit this month, and itineraries you can tailor with Roland Holidays.">`)
            .replace(/<link rel="icon"/,
                     `<link rel="canonical" href="${SITE}/${slug}.html">\n    <link rel="icon"`);

        await writeFile(`${slug}.html`, out);
        console.log(`  ${(slug + '.html').padEnd(18)} ${name}`);
    }
    console.log(`\n${MONTHS.length} month pages built from ${TEMPLATE}`);
};

build().catch((err) => { console.error(err.message); process.exit(1); });
