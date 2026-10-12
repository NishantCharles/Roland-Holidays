/* ==========================================================================
   ROLAND HOLIDAYS — DESTINATION SPOT RENDERER
   ==========================================================================
   Fills the itinerary builder on a destination page from data/spots.js.

   The India state pages use renderStateCitySpots() in india-states.js, which
   predates this and reads richer per-state records. This renderer covers
   every other destination and behaves identically from the user's side:
   click a card, it joins the plan and goes out on WhatsApp.

   A spot with no `img` renders a branded gradient panel instead of a broken
   image, so a destination can go live before its photography is sourced.
   ========================================================================== */

function renderDestinationSpots(container, slug) {
    if (!container || typeof ROLAND_SPOTS === 'undefined') return;

    var spots = ROLAND_SPOTS[slug];
    if (!spots || !spots.length) { container.innerHTML = ''; return; }

    var dest = (typeof ROLAND_DESTINATIONS !== 'undefined' && ROLAND_DESTINATIONS[slug]) || null;
    var fallbackDesc = dest ? dest.name : '';

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function media(spot) {
        if (spot.img) {
            return '<img class="ds-spot-img" src="https://images.unsplash.com/' + spot.img +
                   '?auto=format&fit=crop&w=600&q=70" alt="' + esc(spot.name) + '" loading="lazy">';
        }
        return '<div class="ds-spot-img ds-spot-placeholder" role="img" aria-label="' +
               esc(spot.name) + '"><span>' + esc(spot.name) + '</span></div>';
    }

    container.innerHTML = spots.map(function (spot) {
        var label = spot.name.replace(/'/g, "\\'");
        return '<div class="col-md-6 col-lg-4">' +
            '<div class="ds-spot-card" onclick="toggleSpotSelection(this, \'' + label + '\')">' +
                media(spot) +
                '<div class="ds-spot-content">' +
                    '<div class="ds-spot-checkbox"><i class="fas fa-check"></i></div>' +
                    '<div class="ds-spot-info">' +
                        '<div class="ds-spot-title">' + esc(spot.name) +
                            (spot.days ? ' <span class="ds-city-days">' + esc(spot.days) + '</span>' : '') +
                        '</div>' +
                        '<div class="ds-spot-desc">' + esc(spot.places || fallbackDesc) + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

/* Photo gallery built from the same spots, so a destination page never
   shows another country's landmarks. */
function renderDestinationGallery(container, slug) {
    if (!container || typeof ROLAND_SPOTS === 'undefined') return [];

    var spots = (ROLAND_SPOTS[slug] || []).filter(function (s) { return s.img; });

    /* No photography sourced for this destination yet: hide the gallery and
       its tab rather than show an empty section. Add `img` to spots in
       data/spots.js and both reappear on their own. */
    if (!spots.length) {
        container.innerHTML = '';
        var section = document.getElementById('gallery');
        if (section) section.style.display = 'none';
        var tab = document.querySelector('.tab-nav-link[data-section="gallery"]');
        if (tab) tab.style.display = 'none';
        return [];
    }

    container.innerHTML = spots.map(function (spot, i) {
        return '<div class="gallery-item" onclick="openLightbox(' + i + ')">' +
            '<img src="https://images.unsplash.com/' + spot.img + '?auto=format&fit=crop&w=800&q=75" ' +
                 'alt="' + spot.name.replace(/"/g, '&quot;') + '" loading="lazy">' +
            '<div class="gallery-overlay"><span class="gallery-btn"><i class="fas fa-search-plus"></i></span></div>' +
            '<div class="gallery-caption-bar">' + spot.name.replace(/</g, '&lt;') + '</div>' +
        '</div>';
    }).join('');

    return spots.map(function (spot) {
        return {
            src: 'https://images.unsplash.com/' + spot.img + '?auto=format&fit=crop&w=1480&q=80',
            caption: spot.name
        };
    });
}
