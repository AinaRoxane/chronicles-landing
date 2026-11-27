# Chronicles MG — landing page

Marketing site for Chronicles MG, migrated from a static HTML/CSS/JS site to
Next.js. The visual output is byte-for-byte the same as the original pages: the
design-system CSS was moved (not rewritten) and Tailwind's preflight is disabled
so it cannot alter the existing look.

## Stack

- Next.js `16.4.6` (App Router, Turbopack)
- React `19.3.0`
- next-intl `4.16.2` (French only for now)
- Tailwind CSS `4.3.5` (+ `@tailwindcss/turbopack`)
- TypeScript, ESLint 9 (flat config)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3001
```

The dev server runs on **3001** because the Chronicles app itself uses `3000`
(see `NEXT_PUBLIC_APP_ORIGIN` below).

```bash
npm run build
npm run start
npm run lint
npm run typecheck
```

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_ORIGIN` | `http://localhost:3000` | Origin of the Chronicles app; login links point to `${origin}/{locale}/auth/login` |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3001` | Canonical URL used by `metadataBase` |
| `FEEDBACK_EMAIL` | `hello@roxaina.me` | Destination of the feedback pill (`mailto:`) |
| `NEXT_PUBLIC_FACEBOOK_URL` | `""` | Facebook link in the footer (`""` keeps `href="#"`) |
| `NEXT_PUBLIC_TIKTOK_URL` | `""` | TikTok link in the footer (`""` keeps `href="#"`) |

## Routes

| URL | Source |
| --- | --- |
| `/` | `app/[locale]/(site)/page.tsx` |
| `/creators` | `app/[locale]/(site)/creators/page.tsx` |
| `/pricing` | `app/[locale]/(site)/pricing/page.tsx` |
| `/announcement` | `app/[locale]/(site)/announcement/page.tsx` |
| `/about` | `app/[locale]/(site)/about/page.tsx` |
| anything else | French 404 (`(not-found)` group), without header/footer |

All routes are statically generated (`/fr`, `/fr/about`, …). `proxy.ts`
(Next.js 16's rename of `middleware.ts`) keeps French URLs unprefixed via
`localePrefix: "as-needed"`.

## Internationalisation

French is the only locale today:

- `src/i18n/routing.ts` — `locales: ["fr"]`, `defaultLocale: "fr"`
- `messages/fr.json` — all copy, namespaced per page (`Nav`, `Common`, `Footer`,
  `Home`, `Pricing`, `Creators`, `About`, `Announcement`, `NotFound`, `Metadata`)
- Rich text (`<span class="highlight">`, `<strong>`, links) uses next-intl's
  `t.rich` with tags such as `<hl>`, `<b>` and `<link>`.

To add a language later: add the locale to `routing.locales`, create
`messages/<locale>.json`, and optionally enable it in the header's language
select (`LANGUAGE_OPTIONS` in `src/components/layout/site-header.tsx`).

## Styling

- `src/styles/tokens.css`, `base.css`, `layout.css` and
  `src/styles/components/*.css` are the original stylesheets, unchanged.
- Each page's former inline `<style>` block was extracted verbatim to
  `src/styles/pages/*.css` and is imported by that page only.
- `app/globals.css` imports Tailwind's **theme and utilities only** (no
  preflight) and then the design system, so Tailwind utilities are available
  without changing the existing rendering.
- Pricing's shared metric-band selectors are scoped under `.pricing-page` so
  they cannot leak into the home page during client-side navigation.

## Project structure

```
app/
  [locale]/
    layout.tsx              # <html>/<body> + NextIntlClientProvider
    (site)/layout.tsx       # header + <main> + footer + feedback
    (site)/*/page.tsx       # the five public pages
    (not-found)/            # bare 404 boundary + catch-all
  not-found.tsx             # fallback for invalid locale segments
  globals.css
src/
  components/layout|sections|pages|ui
  i18n/{routing,request,navigation}.ts
  lib/{site-config,routes}.ts
  styles/                   # original CSS + extracted page CSS
messages/fr.json
proxy.ts
```

## Deployment

The site needs a Node.js runtime (Vercel or similar) because `proxy.ts` handles
locale routing. It is **not** compatible with `output: "export"` as-is. Set
`NEXT_PUBLIC_APP_ORIGIN` to the production app origin before building.
