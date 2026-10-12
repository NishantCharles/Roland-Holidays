/* ==========================================================================
   ROLAND HOLIDAYS — MONTH PAGE RENDERER
   ==========================================================================
   Renders a month page from data/months.js and data/destinations.js.

   A month page carries data-month="january" on <body>; everything else on
   the page is filled in from the data. Requires, in order:
       data/destinations.js, data/months.js, core/config.js, this file.

   Hierarchy: Month > Destination (country) > Region > page.
   A destination with a real page links to it. One without offers a WhatsApp
   enquiry built from core/config.js, so no card is ever a dead link.
   ========================================================================== */

(function () {
    'use strict';

    var UNSPLASH = 'https://images.unsplash.com/';
    var CARD_W   = '?auto=format&fit=crop&w=1000&q=70';
    var HERO_W   = '?auto=format&fit=crop&w=1920&q=80';

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function byId(id) { return document.getElementById(id); }

    /* --- WhatsApp enquiry for destinations without a page yet ------------- */
    function enquiryHref(destName, monthName) {
        var cfg = (window.ROLAND && window.ROLAND.config) || null;
        var num = cfg ? cfg.contact.whatsapp : '919769421051';
        var msg = 'Hello Roland Holidays, I am interested in travelling to ' +
                  destName + ' in ' + monthName + '. Could you share some options?';
        return 'https://api.whatsapp.com/send?phone=' + num + '&text=' + encodeURIComponent(msg);
    }

    /* --- Card pieces ----------------------------------------------------- */
    function cardImage(dest) {
        if (dest.img) {
            return '<img src="' + UNSPLASH + dest.img + CARD_W + '" class="ds-mosaic-img" alt="' +
                   esc(dest.name) + '" loading="lazy">';
        }
        /* No photo sourced yet — a branded panel rather than a broken image. */
        return '<div class="ds-mosaic-img ds-mosaic-placeholder" role="img" aria-label="' +
               esc(dest.name) + '"><span>' + esc(dest.name) + '</span></div>';
    }

    function ctaButton(href, text, external) {
        return '<a href="' + href + '"' + (external ? ' target="_blank" rel="noopener"' : '') +
            ' class="primary-button ds-btn-kinetic-gold ds-btn-card-cta">' +
            '<div class="button-item-main">' +
                '<div class="button-text-pill">' +
                    '<div class="primay-button-text">' + esc(text) + '</div>' +
                    '<div class="primay-button-text">' + esc(text) + '</div>' +
                '</div>' +
                '<div class="button-arrow-pill"><div class="arrow-wrapper">' +
                    '<i class="fas fa-arrow-right button-arrow"></i></div></div>' +
            '</div>' +
        '</a>';
    }

    /* Regions shown as a sub-tier under their country, per the hierarchy. */
    function regionLine(dest) {
        if (!dest.regions || !dest.regions.length) return '';
        var names = dest.regions.map(function (slug) {
            var r = ROLAND_DESTINATIONS[slug];
            return r ? esc(r.name) : null;
        }).filter(Boolean);
        if (!names.length) return '';
        return '<p class="ds-mosaic-regions"><span>Regions:</span> ' + names.join(' · ') + '</p>';
    }

    function parentLine(dest) {
        if (!dest.parent) return '';
        var p = ROLAND_DESTINATIONS[dest.parent];
        return p ? '<p class="ds-mosaic-parent">' + esc(p.name) + '</p>' : '';
    }

    function cardText(entry, dest, monthName) {
        var cta = dest.page
            ? ctaButton(dest.page, 'explore ' + dest.name.toLowerCase(), false)
            : ctaButton(enquiryHref(dest.name, monthName), 'enquire about ' + dest.name.toLowerCase(), true);

        return '<div class="ds-mosaic-text">' +
            parentLine(dest) +
            '<h3 class="ds-mosaic-name">' + esc(dest.name) + '</h3>' +
            '<p class="ds-mosaic-desc">' + esc(entry.why || dest.desc) + '</p>' +
            regionLine(dest) +
            cta +
        '</div>';
    }

    /* --- Mosaic: featured row, then a pair, alternating ------------------- */
    function mosaic(list, monthName) {
        var html = '', i = 0, step = 0, flip = false;

        function card(entry) {
            var dest = ROLAND_DESTINATIONS[entry.slug];
            if (!dest) return '';
            return cardImage(dest) + cardText(entry, dest, monthName);
        }

        while (i < list.length) {
            if (step % 2 === 0 || list.length - i === 1) {
                html += '<div class="ds-mosaic-featured' + (flip ? ' ds-mosaic-featured-reverse' : '') + '">' +
                        card(list[i]) + '</div>';
                flip = !flip;
                i += 1;
            } else {
                html += '<div class="ds-mosaic-pair">' +
                    '<div class="ds-mosaic-card">' + card(list[i]) + '</div>' +
                    '<div class="ds-mosaic-card">' + card(list[i + 1]) + '</div>' +
                '</div>';
                i += 2;
            }
            step += 1;
        }
        return html;
    }

    /* --- Render ---------------------------------------------------------- */
    function render() {
        var key = (document.body.getAttribute('data-month') || '').toLowerCase();
        var data = ROLAND_MONTHS[key];
        if (!data) { return; }

        var title = byId('monthHeaderTitle');
        if (title) title.textContent = 'Where to Travel in ' + data.name;

        var crumb = byId('monthBreadcrumbItem');
        if (crumb) crumb.textContent = data.name;

        var short = byId('monthHeaderShort');
        if (short) short.textContent = 'in ' + data.name;

        var season = byId('monthSeasonRange');
        if (season) season.textContent = data.season;

        var theme = byId('monthTheme');
        if (theme) theme.textContent = data.theme;

        var intro = byId('monthIntro');
        if (intro) intro.textContent = data.intro;

        var hero = byId('monthHeroBg');
        if (hero && data.hero) {
            hero.style.backgroundImage =
                "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('" +
                UNSPLASH + data.hero + HERO_W + "')";
        }

        var wrap = byId('monthDestinationCards');
        if (!wrap) return;

        if (data.groups) {
            wrap.innerHTML = data.groups.map(function (g) {
                return '<div class="ds-month-group">' +
                        '<h3 class="ds-month-group-title">' + esc(g.label) + '</h3>' +
                        (g.note ? '<p class="ds-month-group-note">' + esc(g.note) + '</p>' : '') +
                       '</div>' + mosaic(g.list, data.name);
            }).join('');
        } else {
            wrap.innerHTML = mosaic(data.list, data.name);
        }

        /* Prev / next month navigation. */
        var idx = ROLAND_MONTHS.order.indexOf(key);
        if (idx !== -1) {
            var prev = ROLAND_MONTHS.order[(idx + 11) % 12];
            var next = ROLAND_MONTHS.order[(idx + 1) % 12];
            var pEl = byId('monthPrevLink'), nEl = byId('monthNextLink');
            if (pEl) { pEl.href = prev + '.html'; pEl.textContent = ROLAND_MONTHS[prev].name; }
            if (nEl) { nEl.href = next + '.html'; nEl.textContent = ROLAND_MONTHS[next].name; }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
