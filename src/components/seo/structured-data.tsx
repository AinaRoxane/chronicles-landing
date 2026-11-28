import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/site-config";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/seo";

/**
 * Schema.org graph for search engines and AI agents:
 * the organization behind the site and the site itself.
 */
export async function StructuredData() {
  const t = await getTranslations("Metadata.home");
  const description = t("description");
  const sameAs = [
    siteConfig.socials.tiktok,
    siteConfig.socials.facebook,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: SITE_NAME,
        alternateName: ["Chronicles", "Chronicles Madagascar"],
        url: siteConfig.siteUrl,
        description,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: SITE_NAME,
        description,
        inLanguage: "fr",
        keywords: SITE_KEYWORDS.join(", "),
        publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
