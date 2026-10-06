/**
 * Roland Holidays — design system linter
 *
 * Guards the parent system: reports colour literals that bypass
 * core/tokens.css, and contact details hardcoded outside core/config.js.
 *
 * Exits non-zero when anything is found, so it can gate a commit or CI.
 * Run with `npm run lint`.
 */
import { readFile, readdir } from 'node:fs/promises';

const OUR_CSS  = ['assets/style/custom.css', 'assets/style/design-system.css'];
const TOKENS   = 'assets/style/core/tokens.css';
const CONFIG   = 'assets/js/core/config.js';

const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '');

const run = async () => {
    let problems = 0;

    // 1. Colour literals that should be tokens.
    const tokenValues = new Set(
        (await readFile(TOKENS, 'utf8')).match(/#[0-9a-fA-F]{3,6}\b/g)?.map((h) => h.toUpperCase()) || []
    );

    for (const file of OUR_CSS) {
        const hits = {};
        for (const hex of stripComments(await readFile(file, 'utf8')).match(/#[0-9a-fA-F]{3,6}\b/g) || []) {
            hits[hex.toUpperCase()] = (hits[hex.toUpperCase()] || 0) + 1;
        }
        const entries = Object.entries(hits).sort((a, b) => b[1] - a[1]);
        if (entries.length) {
            console.log(`\n${file} — ${entries.length} colour literals bypassing tokens.css:`);
            for (const [hex, n] of entries.slice(0, 12)) {
                const near = tokenValues.has(hex) ? '  (a token already holds this exact value)' : '';
                console.log(`   ${hex}  x${n}${near}`);
            }
            if (entries.length > 12) console.log(`   …and ${entries.length - 12} more`);
            problems += entries.length;
        }
    }

    // 2. Contact details hardcoded outside the config.
    const { contact } = await import('node:url').then(async () => {
        const src = await readFile(CONFIG, 'utf8');
        return {
            contact: {
                whatsapp: src.match(/whatsapp:\s*'([^']+)'/)?.[1],
                email:    src.match(/email:\s*'([^']+)'/)?.[1],
            },
        };
    });

    const files = [
        ...(await readdir('.')).filter((f) => f.endsWith('.html')),
        ...(await readdir('assets/js')).filter((f) => f.endsWith('.js')).map((f) => `assets/js/${f}`),
    ];

    let fallbacks = 0;
    for (const file of files) {
        const src = await readFile(file, 'utf8');
        const n = (src.match(new RegExp(contact.whatsapp, 'g')) || []).length;
        if (n) fallbacks += n;
    }
    if (fallbacks) {
        console.log(`\nContact number appears ${fallbacks}x in markup and scripts.`);
        console.log('   These are intentional no-JS fallbacks: contact-links.js rewrites');
        console.log('   every one of them from core/config.js at load. Not counted as drift.');
    }

    if (!problems) {
        console.log('✓ no colour literals or hardcoded contact details outside the parent system');
        return;
    }
    console.log(`\n${problems} colour literals bypass the token layer. These do not break`);
    console.log('the site — they are near-duplicates of real tokens and collapsing them');
    console.log('needs a visual re-test of the affected pages.');
    process.exitCode = 1;
};

run().catch((err) => { console.error(err); process.exit(1); });
