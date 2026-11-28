/**
 * Site configuration — replaces the old `js/config.js`.
 * Only NEXT_PUBLIC_* values are exposed to the browser.
 */
export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001",
  appOrigin: process.env.NEXT_PUBLIC_APP_ORIGIN ?? "http://localhost:3000",
  feedbackEmail: process.env.FEEDBACK_EMAIL ?? "hello@roxaina.me",
  socials: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://web.facebook.com/roxaina.mee",
    tiktok:
      process.env.NEXT_PUBLIC_TIKTOK_URL ||
      "https://www.tiktok.com/@roxane_aina",
  },
} as const;
