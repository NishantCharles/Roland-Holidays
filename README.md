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

## Month pages

Twelve pages — `january.html` … `december.html` — covering 120
month/destination pairings across 71 unique destinations.

### Hierarchy

```
Month  →  Destination (country)  →  Region  →  page with itinerary + WhatsApp
```

Ten entries in the source data are already at the region tier — *Okinawa,
Japan*; *Ladakh, India*; *Utah/Hawaii/Montana/New England/Florida, USA*;
*Borneo, Malaysia*; *The Cotswolds*; *Alaska* — so they are parented to their
country and the card shows that country above the name.

### Where the content lives

| File | Holds |
|---|---|
| `assets/js/data/destinations.js` | One record per destination. 30 appear in several months; each is described once here. |
| `assets/js/data/months.js` | Each month's list, referencing destination slugs, with a "why this month" line per pairing. |
| `assets/js/month-render.js` | Renders a page from `<body data-month="…">`. |

To change a destination's description, image or page, edit its record — every
month showing it updates.

### Card links

A destination with a real `page` links to it. One without offers a WhatsApp
enquiry prefilled with the destination and month, built from
`core/config.js`. **No card is ever a dead link**, and adding a country page
later only means setting `page:` on that record.

### Images

21 destinations have a verified Unsplash photo. The other 50 render a branded
gradient panel carrying the destination name — deliberately, because inventing
Unsplash ids would produce 404s. Set `img` on a record to upgrade its card;
nothing else needs to change.

### Regenerating

`january.html` is the template. After editing it:

```bash
npm run months     # rebuilds all twelve from january.html
```

Each page gets its own title, meta description and canonical URL, since these
are the SEO surface for "where to travel in <month>". `month-detail.html` is
now a `noindex` redirect shim so old `?month=` links keep working.

## Destination pages

Every destination in the month data has its own page with an itinerary
builder: pick places, set pax, hotel class and dates, and the plan goes to
Roland Holidays on WhatsApp.

### Where the content lives

| File | Holds |
|---|---|
| `assets/js/data/destinations.js` | One record per destination — name, type, parent, image, page. |
| `assets/js/data/spots.js` | The selectable places per destination, with stay length and what each covers. |
| `assets/js/india-states.js` | India's states, which carry extra fields `india.html` needs. |
| `assets/js/destination-spots.js` | Renders the builder and the gallery for any destination. |

### Regenerating

Three generators, all idempotent — running them repeatedly produces
byte-identical output:

```bash
npm run states          # the 8 India states, from rajasthan.html
npm run destinations    # every other destination, from rajasthan.html
npm run months          # the 12 month pages, from january.html
```

`rajasthan.html` and `january.html` are both template **and** output, so each
generator strips what the previous run injected (page slug, canonical link,
script tags) before writing. Edit a template and re-run to roll the change
across every page.

### Images

21 destinations have a verified Unsplash photo. The rest render a branded
gradient panel carrying the name — inventing Unsplash ids would produce 404s.
A destination with no spot photography hides its gallery section and tab
rather than showing an empty shell.

Set `img` on a record or a spot and the card, hero and gallery upgrade
automatically. Nothing else needs changing.

### Legacy URLs

`destination-detail.html` and `month-detail.html` are `noindex` routers that
send old `?country=`, `?state=` and `?month=` links to the right page. Both
previously rendered content: `destination-detail.html` showed Rajasthan's
photos and Indian itinerary spots whatever destination you asked for.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Static server on :4173 |
| `npm run images` | Cap width at 1920, re-encode JPEG/PNG, emit `.webp` + `.avif` |
| `npm run pictures` | Wrap `<img>` in `<picture>` with avif/webp sources |
| `npm run tokenize` | Bind colour literals in our CSS to tokens |
| `npm run lint` | Report drift that bypasses either parent |
| `npm run smoke` | Fetch every page, verify all assets resolve |
| `npm run months` | Rebuild the twelve month pages from `january.html` |
| `npm run states` | Rebuild the 8 India state pages from `rajasthan.html` |
| `npm run destinations` | Rebuild every other destination page |

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

### External image dependency

Photography is served from Unsplash's CDN rather than `assets/img`. Their CDN
resizes and serves WebP, so this is not a speed problem — but it is an
external dependency on every page load, and the licensing should be confirmed
before launch.

Two worse cases were removed: 246 video posters that hotlinked Unsplash (now
local frames that actually match the video), and a lightbox gallery on
`img.magnific.com` whose signed URL expired in June 2026 — four months before
anyone noticed.

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
