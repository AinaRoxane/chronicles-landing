import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

// Next.js 16 renamed `middleware.ts` to `proxy.ts`.
export default createMiddleware(routing);

export const config = {
  // Match every pathname except Next internals and public assets. Unlike the
  // default next-intl matcher we do NOT skip dotted paths, so requests like
  // `/unknown.txt` are still resolved to the locale 404 page instead of
  // falling through to Next's built-in error document.
  matcher: "/((?!api|trpc|_next|_vercel|images|favicon.ico).*)",
};
