/**
 * Roland Holidays — breadcrumb builder
 *
 * One shape site-wide, following the hierarchy the site is organised around:
 *
 *     Home > <month> > <country> > <this page>
 *
 * Both optional middle tiers are dropped when they do not apply, so a country
 * with no parent is three levels and a region under one is four.
 *
 *     Home > January > India > Goa          (state, parent India)
 *     Home > January > Japan > Okinawa      (region, parent Japan)
 *     Home > January > Argentina            (country, no parent)
 *     Home > Plan By Month > January        (month page)
 *
 * The month tier is the FIRST month we recommend that destination for, taken
 * from data/months.js — not a hardcoded one. The template had `january.html`
 * baked in, which is why every page claimed January regardless.
 */

const LI_SEP = '<li class="separator"><i class="fas fa-chevron-right"></i></li>';

/** Build the <li> list for a destination or state page. */
export const breadcrumbFor = ({ name, monthName, monthSlug, parentName, parentPage, indent = ' '.repeat(20) }) => {
    const rows = [
        `<li><a href="index.html"><i class="fas fa-home me-1"></i> Home</a></li>`,
    ];

    if (monthName && monthSlug) {
        rows.push(LI_SEP, `<li><a href="${monthSlug}.html">${monthName}</a></li>`);
    } else if (!parentName) {
        // No month and no parent country — fall back to the listing so the
        // crumb is never just "Home > Somewhere".
        rows.push(LI_SEP, `<li><a href="destinations.html">Destinations</a></li>`);
    }
    if (parentName && parentPage) {
        rows.push(LI_SEP, `<li><a href="${parentPage}">${parentName}</a></li>`);
    }
    rows.push(LI_SEP, `<li class="active-item" id="breadcrumbActiveItem">${name}</li>`);

    return rows.map((r) => indent + r).join('\n');
};

/**
 * Replace the template's hardcoded crumb list with a generated one.
 * Matches the <ul> and rewrites its contents, leaving the <ul> tag intact.
 */
export const applyBreadcrumb = (html, liMarkup) =>
    html.replace(
        /(<ul class="ds-subpage-breadcrumb[^"]*">)[\s\S]*?(<\/ul>)/,
        (m, open, close) => `${open}\n${liMarkup}\n${' '.repeat(16)}${close}`
    );

/** First month we recommend a destination for, or null. */
export const firstMonthFor = (slug, monthsFor) => {
    const list = monthsFor[slug];
    return list && list.length ? list[0] : null;
};
