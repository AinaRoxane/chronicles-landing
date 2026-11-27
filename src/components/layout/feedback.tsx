import { getTranslations } from "next-intl/server";
import { feedbackMailto } from "@/lib/routes";

export async function Feedback() {
  const t = await getTranslations("Common");

  return (
    <a
      href={feedbackMailto()}
      className="feedback"
      aria-label={t("feedbackAria")}
    >
      {t("feedback")}
    </a>
  );
}
