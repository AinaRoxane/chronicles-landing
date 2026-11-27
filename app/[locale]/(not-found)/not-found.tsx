import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { NotFoundContent } from "@/components/pages/not-found-content";
import { loginUrl } from "@/lib/routes";
import "@/styles/pages/not-found.css";

// Metadata for this boundary is provided by `(not-found)/layout.tsx`.
export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();

  return (
    <NotFoundContent
      eyebrow={t("eyebrow")}
      title={t.rich("title", {
        hl: (chunks) => <span className="highlight">{chunks}</span>,
      })}
      subtitle={t("subtitle")}
      homeLabel={t("home")}
      exploreLabel={t("explore")}
      homeHref={getPathname({ href: "/", locale })}
      loginHref={loginUrl(locale)}
    />
  );
}
