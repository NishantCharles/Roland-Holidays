# Roland Holidays

Multi-page static site for a travel agency. Plain HTML, CSS and JavaScript —
no framework, no build step required to serve it.

## Running locally

```bash
npm install
npm start          # http://localhost:4173
```

## The parent system

Design decisions and business configuration each live in exactly one file.
Change them there and the change propagates site-wide.

### Design — `assets/style/core/tokens.css`

Every colour, font size, radius, shadow, duration and z-index on the site.
104 tokens, loaded before every other stylesheet on every page.

Changing the brand teal is a one-line edit:

```css
--ds-color-primary: #008080;   /* change here, applies everywhere */
```

**Do not hardcode a hex value, px radius or shadow anywhere else.** Add a
token or reuse an existing one. `npm run lint` reports anything that
bypasses this.

### Logic — `assets/js/core/config.js`

Contact details, brand strings, breakpoints and feature flags.

```js
contact: {
    whatsapp: '919769421051',
    phoneDial: '+919769421051',
    email: 'sales1@rolandholidays.com',
}
```

`core/contact-links.js` rewrites every WhatsApp, `tel:` and `mailto:` link
on load to match. A MutationObserver covers links injected at runtime, so
the floating button and the mobile drawer are bound too.

The numbers still present in page markup are **deliberate** — they are the
no-JS fallback. The config overwrites them whenever JavaScript runs.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Static server on :4173 |
| `npm run images` | Cap width at 1920, re-encode JPEG/PNG, emit `.webp` + `.avif` |
| `npm run pictures` | Wrap `<img>` in `<picture>` with avif/webp sources |
| `npm run tokenize` | Bind colour literals in our CSS to tokens |
| `npm run lint` | Report drift that bypasses either parent |
| `npm run smoke` | Fetch every page, verify all assets resolve |

All are idempotent — safe to re-run.

## Images

`npm run images` produces three files per source: an optimised JPEG/PNG
fallback, a `.webp` and a `.avif`. `npm run pictures` wires them into
`<picture>` blocks so browsers pick the smallest format they support.

After adding new images, run both, then `npm run smoke`.

## Branches

| Branch | Purpose |
|---|---|
| `main` | Canonical. What the client sees. Keep deployable. |
| `dev` | Work in progress. Merge into `main` once approved. |

## Known issues

### Admin login is not secure

`login.html` checks credentials in client-side JavaScript, and
`live-editor.js` gates on `localStorage.isAdmin`. Anyone can set that flag
in devtools and get edit mode without a password — and because this repo is
public, the credentials in the page source are public too.

Edits also save to `localStorage` only. They never reach a server, so they
are visible to one browser on one device and vanish when the cache clears.
It looks like a CMS but does not function as one.

Making this genuinely secure requires a backend to authenticate against and
store content in. Until then, treat the credentials as compromised and do
not rely on the editor for real content.

### Colour drift

66 colour literals remain in `custom.css` and `design-system.css`. Almost
all are near-duplicates of real tokens — `#5A9BBF` against the token
`#5A9ABF`, one digit apart. Collapsing them would shift rendering slightly,
so they were left alone and are reported by `npm run lint` instead. Worth
doing as its own change, with a visual pass over the affected pages.

### Hotlinked images

Several pages load photographs directly from Unsplash rather than from
`assets/img`. That is an external dependency on every page load, and the
licensing should be confirmed before the site goes live.

### Why there is no minification step

The site ships ~1 MB of unminified CSS, which sounds bad but gzips to
127 KB — and GitHub Pages gzips automatically. Minifying would save roughly
30 KB more while introducing a build step someone has to remember to run
before every deploy. Not a good trade here. Revisit it if a bundler is
added for other reasons.

`assets/style/color5.css` (283 KB raw, 34 KB gzipped) is a leftover theme
file from the original template and is probably mostly dead. Auditing what
it actually contributes is worth doing, but it needs a careful pass over
every page.
