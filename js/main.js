/* ============================================================
   MAIN — shared behavior for every landing page
   - resolves [data-route] / [data-link] anchors from SITE_CONFIG
   - language switcher (persists locale, refreshes route links)
   - mobile navigation panel (open/close, Esc, resize, scroll lock)
   ============================================================ */
(function () {
    "use strict";

    var config = window.SITE_CONFIG;

    /* ---------- links driven by config.js ---------- */

    function applyRoutes() {
        if (!config) return;

        document.querySelectorAll("[data-route]").forEach(function (el) {
            var url = config.route(el.getAttribute("data-route"));
            if (url) el.setAttribute("href", url);
        });

        document.querySelectorAll("[data-link]").forEach(function (el) {
            var url = config.link(el.getAttribute("data-link"));
            if (url) el.setAttribute("href", url);
        });
    }

    /* ---------- language switcher ---------- */

    var langSelect = document.querySelector(".language-switcher select");

    if (langSelect && config) {
        langSelect.value = config.locale;
        langSelect.addEventListener("change", function () {
            config.setLocale(langSelect.value);
            applyRoutes();
        });
    }

    /* ---------- mobile navigation ---------- */

    var openBtn = document.querySelector(".header__menu-btn");
    var closeBtn = document.querySelector(".mobile-nav__close");
    var panel = document.getElementById("mobile-nav");

    if (openBtn && panel) {
        function setOpen(open) {
            openBtn.setAttribute("aria-expanded", open ? "true" : "false");
            openBtn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
            panel.hidden = !open;
            document.body.style.overflow = open ? "hidden" : "";
            if (open) {
                requestAnimationFrame(function () { panel.classList.add("is-open"); });
            } else {
                panel.classList.remove("is-open");
            }
        }

        openBtn.addEventListener("click", function () {
            var isOpen = openBtn.getAttribute("aria-expanded") === "true";
            setOpen(!isOpen);
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                setOpen(false);
                openBtn.focus();
            });
        }

        panel.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () { setOpen(false); });
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && openBtn.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                openBtn.focus();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth >= 800 && openBtn.getAttribute("aria-expanded") === "true") {
                setOpen(false);
            }
        });
    }

    applyRoutes();
})();
