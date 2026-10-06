/* ==========================================================================
   ROLAND HOLIDAYS — SITE CONFIGURATION
   ==========================================================================
   The single source of truth for business details and behavioural flags.

   Change a phone number, email or WhatsApp number here and it updates
   everywhere on the site. Do not hardcode contact details in page markup —
   contact-links.js rewrites every tel:, mailto: and WhatsApp link on load
   to match whatever is set below.
   ========================================================================== */

window.ROLAND = window.ROLAND || {};

window.ROLAND.config = {
    brand: {
        name: 'Roland Holidays',
        tagline: 'Discover the world with us…',
    },

    contact: {
        /* Digits only, with country code — used to build WhatsApp links. */
        whatsapp: '919769421051',
        /* Human-readable, shown in markup. */
        phoneDisplay: '+91 97694-21051',
        /* Dial format, used for tel: links. */
        phoneDial: '+919769421051',
        email: 'sales1@rolandholidays.com',
    },

    /* Default message pre-filled when a visitor opens WhatsApp. */
    whatsappMessage: 'Hello Roland Holidays, I would like to know more about your holiday packages.',

    /* Breakpoints, mirrored from core/tokens.css. Keep the two in step. */
    breakpoints: {
        mobile: 430,
        tablet: 768,
        laptop: 1024,
        desktop: 1366,
    },

    features: {
        /* The in-page admin editor. See the security note in README before
           enabling this on a public deployment. */
        liveEditor: true,
        stickyHeader: true,
        loader: true,
    },
};
