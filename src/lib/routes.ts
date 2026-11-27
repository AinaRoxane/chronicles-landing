import { siteConfig } from "./site-config";

/**
 * Build the external login URL for a given locale.
 * Redirects to the Chronicles application (auth, reader, studio).
 */
export function loginUrl(locale: string): string {
  const short = locale.split("-")[0]; // "mg-MG" -> "mg"
  return `${siteConfig.appOrigin}/${short}/auth/login`;
}

/** Feedback mailto link (same destination as the old `data-link="feedback"`). */
export function feedbackMailto(): string {
  const subject = encodeURIComponent("Feedback — Chronicles MG");
  return `mailto:${siteConfig.feedbackEmail}?subject=${subject}`;
}

export const socialLinks = siteConfig.socials;
