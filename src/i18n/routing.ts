import { defineRouting } from "next-intl/routing";

/**
 * Locales available on the landing site.
 *
 * French is the only locale for now. Add `"en"` / `"mg"` here plus a matching
 * `messages/<locale>.json` to ship a new language — no routing changes needed.
 */
export const routing = defineRouting({
  locales: ["fr"],
  defaultLocale: "fr",
  // `/` stays unprefixed for French; other locales (later) get `/en/...`.
  localePrefix: "as-needed",
});
