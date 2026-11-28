import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/sections/cta-band";
import "@/styles/pages/announcement.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.announcement");

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/announcement",
  });
}

export default async function AnnouncementPage() {
  const t = await getTranslations("Announcement");
  const highlight = (chunks: ReactNode) => (
    <span className="highlight">{chunks}</span>
  );

  return (
    <>
      {/* ===== ANNOUNCEMENTS ===== */}
      <section className="announce">
        <div className="container">
          <div className="announce__grid">
            <div>
              <p className="announce__eyebrow">
                <span aria-hidden="true"></span>
                {t("eyebrow")}
              </p>
              <h1 className="announce__title">
                {t.rich("title", { hl: highlight })}
              </h1>
              <p className="announce__lead">{t("lead")}</p>
            </div>

            {/*
              Original poster block was commented out in announcement.html:
              <figure className="announce__poster">
                <img
                  src="/images/current-annoucement.png"
                  alt={t("posterAlt")}
                  width="1080"
                  height="1350"
                />
              </figure>
            */}
          </div>
        </div>
      </section>

      <CtaBand
        title={t("ctaTitle")}
        text={t("ctaText")}
        button={t("ctaButton")}
      />
    </>
  );
}
