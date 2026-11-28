import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const SITE_NAME = "Chronicles MG";

/** Core search vocabulary for the landing page (FR + product terms). */
export const SITE_KEYWORDS = [
  "Chronicles MG",
  "webnovels malagasy",
  "webcomics malagasy",
  "webnovels malgaches",
  "webcomics malgaches",
  "histoires à Madagascar",
  "lire des histoires malagasy",
  "romans malgaches",
  "BD malgaches",
  "plateforme de lecture Madagascar",
  "littérature malgache",
];

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/** Per-page metadata: canonical URL + Open Graph + Twitter card. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        fr: path,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
