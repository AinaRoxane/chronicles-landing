"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { loginUrl } from "@/lib/routes";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "creators", href: "/creators" },
  { key: "pricing", href: "/pricing" },
  { key: "announcement", href: "/announcement" },
  { key: "about", href: "/about" },
] as const;

/** Pages whose header CTA reads "Créer un compte" instead of "Commencer à lire". */
const CREATE_ACCOUNT_PATHS = new Set(["/creators", "/announcement", "/about"]);

const LANGUAGE_OPTIONS = [
  { code: "fr", label: "FR", enabled: true },
  { code: "en", label: "EN", enabled: false },
  { code: "mg", label: "MG", enabled: false },
];

export function SiteHeader() {
  const t = useTranslations("Common");
  const tNav = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  // Add `is-open` on the next frame so the CSS transition runs. This touches
  // only the DOM (no React state), mirroring the original main.js.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!open) {
      panel.classList.remove("is-open");
      return;
    }

    const frame = requestAnimationFrame(() => panel.classList.add("is-open"));
    return () => {
      cancelAnimationFrame(frame);
      panel.classList.remove("is-open");
    };
  }, [open]);

  // Scroll lock, mirroring the original main.js behaviour.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleResize() {
      if (window.innerWidth >= 800) setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const ctaLabel = CREATE_ACCOUNT_PATHS.has(pathname)
    ? t("ctaCreate")
    : t("ctaRead");

  return (
    <>
      <header className="header">
        <div className="header__left">
          <button
            ref={menuButtonRef}
            className="header__menu-btn"
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon />
          </button>
          <nav className="header__nav" aria-label={tNav("mainNavigation")}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tNav(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="header__right">
          <div className="language-switcher">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <select aria-label={t("changeLanguage")} defaultValue={locale}>
              {LANGUAGE_OPTIONS.map((option) => (
                <option
                  key={option.code}
                  value={option.code}
                  disabled={!option.enabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <a href={loginUrl(locale)} className="header__cta">
            {ctaLabel}
          </a>
        </div>
      </header>

      <nav
        ref={panelRef}
        className="mobile-nav"
        id="mobile-nav"
        aria-label={tNav("mobileNavigation")}
        hidden={!open}
      >
        <button
          className="mobile-nav__close"
          type="button"
          aria-label={t("closeMenu")}
          onClick={() => {
            setOpen(false);
            menuButtonRef.current?.focus();
          }}
        >
          <CloseIcon />
        </button>

        <ul className="mobile-nav__list">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {tNav(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
