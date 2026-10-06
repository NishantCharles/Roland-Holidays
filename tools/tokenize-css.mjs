/**
 * Roland Holidays — bind hardcoded colours to design tokens
 *
 * Rewrites literal hex values in our own stylesheets as var(--ds-*)
 * references, so colour lives only in core/tokens.css. Vendor stylesheets
 * are never touched. Computed colours are identical before and after.
 *
 * Idempotent. Run with `npm run tokenize`.
 */
import { readFile, writeFile } from 'node:fs/promises';

const TARGETS = ['assets/style/custom.css', 'assets/style/design-system.css'];

const MAP = {
    '#7FB4D4': '--ds-color-sky',          '#3A8AB5': '--ds-color-sky-deep',
    '#4A8FAE': '--ds-color-sky-mid',      '#5A9ABF': '--ds-color-secondary',
    '#C8DFED': '--ds-color-sky-100',      '#E8F3FA': '--ds-color-sky-50',
    '#E3EEF5': '--ds-color-sky-25',
    '#008080': '--ds-color-primary',      '#006666': '--ds-color-primary-hover',
    '#FF7F50': '--ds-color-gold',         '#E86A3C': '--ds-color-gold-hover',
    '#C88E10': '--ds-color-gold-dark',    '#E53935': '--ds-color-coral',
    '#0D1F2D': '--ds-color-navy',         '#101A2D': '--ds-color-navy-surface',
    '#0F172A': '--ds-neutral-900',        '#1E293B': '--ds-neutral-800',
    '#334155': '--ds-neutral-700',        '#475569': '--ds-text-secondary',
    '#64748B': '--ds-neutral-500',        '#94A3B8': '--ds-text-muted',
    '#CBD5E1': '--ds-neutral-300',        '#E2E8F0': '--ds-border-color',
    '#F1F5F9': '--ds-neutral-100',        '#F8FAFC': '--ds-neutral-50',
    '#FFFFFF': '--ds-white',              '#2F4F4F': '--ds-text-primary',
    '#ECF2F6': '--ds-bg-alt',             '#EEF2F6': '--ds-bg-tint',
    '#F0F4F7': '--ds-bg-tint-warm',       '#F7FAFB': '--ds-bg-tint-cool',
    '#E8EEF3': '--ds-bg-tint-sky',
    '#22C55E': '--ds-color-success',      '#EF4444': '--ds-color-danger',
    '#25D366': '--ds-color-whatsapp',     '#1DA851': '--ds-color-whatsapp-hover',
    '#FFF': '--ds-white',                 '#000': '--ds-black',
    '#111': '--ds-grey-900',              '#222': '--ds-grey-850',
    '#333': '--ds-grey-800',              '#444': '--ds-grey-750',
    '#555': '--ds-grey-700',              '#666': '--ds-grey-600',
    '#777': '--ds-grey-550',              '#888': '--ds-grey-500',
    '#999': '--ds-grey-450',              '#AAA': '--ds-grey-400',
    '#BBB': '--ds-grey-350',              '#CCC': '--ds-grey-300',
    '#DDD': '--ds-grey-250',              '#EEE': '--ds-grey-200',
    '#111111': '--ds-grey-900',              '#000000': '--ds-black',
};

/** Spans of /* … *\/ comments, which must not be rewritten. */
const commentRanges = (css) => {
    const ranges = [];
    const re = /\/\*[\s\S]*?\*\//g;
    let m;
    while ((m = re.exec(css))) ranges.push([m.index, m.index + m[0].length]);
    return ranges;
};

const run = async () => {
    let grandTotal = 0;

    for (const file of TARGETS) {
        const css      = await readFile(file, 'utf8');
        const comments = commentRanges(css);
        const counts   = {};

        const out = css.replace(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g, (hex, offset) => {
            if (comments.some(([a, b]) => offset >= a && offset < b)) return hex;
            const token = MAP[hex.toUpperCase()];
            if (!token) return hex;
            counts[token] = (counts[token] || 0) + 1;
            return `var(${token})`;
        });

        const replaced = Object.values(counts).reduce((a, b) => a + b, 0);
        if (replaced) await writeFile(file, out);

        const remaining = (out.match(/#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g) || []).length;
        console.log(`  ${file.padEnd(32)} ${String(replaced).padStart(4)} bound, ${remaining} literal hex left`);
        grandTotal += replaced;
    }

    console.log(`\n${grandTotal} colour literals now resolve through core/tokens.css`);
};

run().catch((err) => { console.error(err); process.exit(1); });
