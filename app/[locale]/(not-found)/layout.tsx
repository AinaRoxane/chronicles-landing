import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.notFound");

  return {
    title: { absolute: t("title") },
    description: t("description"),
  };
}

/**
 * Layout for the 404 boundary: no header/footer/feedback, matching 404.html.
 */
export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
