import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { socialLinks } from "@/lib/routes";
import { FacebookIcon, TikTokIcon } from "@/components/ui/icons";

export async function Footer() {
  const t = await getTranslations("Footer");
  const common = await getTranslations("Common");

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>
              {common("brand")}
              <span className="footer__badge">{common("beta")}</span>
            </h3>
            <p>{t("tagline")}</p>
            <div className="footer__socials">
              <a href={socialLinks.tiktok || "#"} aria-label={t("tiktok")}>
                <TikTokIcon />
              </a>
              <a href={socialLinks.facebook || "#"} aria-label={t("facebook")}>
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>{t("product")}</h4>
            <ul>
              <li>
                <Link href="/#how">{t("howItWorks")}</Link>
              </li>
              <li>
                <Link href="/#communaute">{t("community")}</Link>
              </li>
              <li>
                <Link href="/pricing">{t("pricing")}</Link>
              </li>
              <li>
                <Link href="/">{t("explore")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t("legal")}</h4>
            <ul>
              <li>
                <Link href="/about">{t("about")}</Link>
              </li>
              <li>
                <a href="#">{t("terms")}</a>
              </li>
              <li>
                <a href="#">{t("data")}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
