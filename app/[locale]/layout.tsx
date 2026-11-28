import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/seo";
import { RouteScroll } from "@/components/layout/route-scroll";
import { StructuredData } from "@/components/seo/structured-data";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.home");
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    // Titles are authored in full per page (as in the original HTML).
    title,
    description,
    applicationName: SITE_NAME,
    keywords: SITE_KEYWORDS,
    authors: [{ name: SITE_NAME, url: siteConfig.siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "books",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      url: siteConfig.siteUrl,
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <StructuredData />
        <NextIntlClientProvider>
          <RouteScroll />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
