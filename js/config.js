/* ============================================================
   SITE CONFIG — single source of truth for app links & locale
   Loaded before js/main.js on every landing page.
   ============================================================ */
window.SITE_CONFIG = (function () {
    "use strict";

    var STORAGE_KEY = "chronicles-locale";
    var SUPPORTED_LOCALES = ["fr", "en", "mg"];
    var DEFAULT_LOCALE = "fr";

    /* Origin of the Chronicles application (auth, reader, studio) */
    var APP_ORIGIN = "http://localhost:3000";

    /* External destinations (empty string = keep the markup href) */
    var LINKS = {
        feedback: "",
        facebook: "",
        linkedin: ""
    };

    function normalizeLocale(value) {
        if (!value) return null;
        value = String(value).toLowerCase();
        if (SUPPORTED_LOCALES.indexOf(value) !== -1) return value;
        var short = value.split("-")[0];
        return SUPPORTED_LOCALES.indexOf(short) !== -1 ? short : null;
    }

    function readStoredLocale() {
        try {
            return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
        } catch (e) {
            return null;
        }
    }

    var locale =
        readStoredLocale() ||
        normalizeLocale(document.documentElement.getAttribute("lang")) ||
        DEFAULT_LOCALE;

    var config = {
        appOrigin: APP_ORIGIN,
        locales: SUPPORTED_LOCALES.slice(),

        get locale() {
            return locale;
        },

        /* Route templates — {appOrigin} and {locale} are replaced on resolve */
        routes: {
            login: "{appOrigin}/{locale}/auth/login"
        },

        links: LINKS,

        route: function (name) {
            var template = config.routes[name];
            if (!template) return null;
            return template
                .replace("{appOrigin}", APP_ORIGIN)
                .replace("{locale}", locale);
        },

        link: function (name) {
            return LINKS[name] || null;
        },

        setLocale: function (next) {
            var normalized = normalizeLocale(next);
            if (!normalized) return locale;
            locale = normalized;
            try {
                window.localStorage.setItem(STORAGE_KEY, locale);
            } catch (e) { /* private mode, ignore */ }
            document.documentElement.setAttribute("lang", locale);
            return locale;
        }
    };

    return config;
})();
