/**
 * Site configuration — replaces the old `js/config.js`.
 * Only NEXT_PUBLIC_* values are exposed to the browser.
 */
export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  appOrigin: process.env.NEXT_PUBLIC_APP_ORIGIN ?? "",
  feedbackEmail: process.env.FEEDBACK_EMAIL ?? "",
  socials: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "",
    tiktok:
      process.env.NEXT_PUBLIC_TIKTOK_URL ||
      "",
  },
} as const;
