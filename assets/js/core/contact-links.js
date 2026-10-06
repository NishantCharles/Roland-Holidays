/* ==========================================================================
   ROLAND HOLIDAYS — CONTACT LINK BINDING
   ==========================================================================
   Rewrites every WhatsApp, tel: and mailto: link on the page to match
   core/config.js, so the contact details exist in exactly one place.

   Existing markup needs no changes: the numbers already written into pages
   are simply overwritten at load with the configured values.
   ========================================================================== */

(function () {
    'use strict';

    const config = (window.ROLAND && window.ROLAND.config) || null;
    if (!config) {
        console.warn('[roland] config.js must load before contact-links.js');
        return;
    }

    const { whatsapp, phoneDial, email } = config.contact;

    const whatsappHref = (existing) => {
        // Preserve a page-specific prefilled message where one exists.
        let text = config.whatsappMessage;
        try {
            const url    = new URL(existing, window.location.origin);
            const stated = url.searchParams.get('text');
            if (stated) text = stated;
        } catch { /* malformed href — fall back to the default message */ }
        return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(text)}`;
    };

    const bind = () => {
        let whatsappCount = 0, telCount = 0, mailCount = 0;

        document.querySelectorAll('a[href]').forEach((a) => {
            const href = a.getAttribute('href');
            if (!href) return;

            if (/(?:wa\.me|whatsapp\.com\/send|api\.whatsapp\.com)/i.test(href)) {
                a.setAttribute('href', whatsappHref(href));
                whatsappCount++;
            } else if (href.startsWith('tel:')) {
                a.setAttribute('href', `tel:${phoneDial}`);
                telCount++;
            } else if (href.startsWith('mailto:')) {
                // Keep any subject/body already attached to the link.
                const [, query = ''] = href.split('?');
                a.setAttribute('href', `mailto:${email}${query ? '?' + query : ''}`);
                mailCount++;
            }
        });

        return { whatsappCount, telCount, mailCount };
    };

    /* Links injected later (the drawer and the floating button are built at
       runtime) must be bound too, so watch for them rather than binding once. */
    const observe = () => {
        const observer = new MutationObserver((records) => {
            const added = records.some((r) => r.addedNodes.length > 0);
            if (added) bind();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    const start = () => { bind(); observe(); };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
