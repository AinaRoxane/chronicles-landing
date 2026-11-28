import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

// Next.js 16 renamed `middleware.ts` to `proxy.ts`.
export default createMiddleware(routing);

export const config = {
  // Match every pathname except Next internals, public assets and the
  // metadata endpoints (robots.txt, sitemap.xml, llms.txt), which must be
  // served by Next directly. Unlike the default next-intl matcher we do NOT
  // skip every dotted path, so `/unknown.txt` still resolves to the locale 404.
  matcher:
    "/((?!api|trpc|_next|_vercel|images|favicon.ico|robots.txt|sitemap.xml|llms.txt).*)",
};
