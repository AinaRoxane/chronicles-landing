import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { ArrowRightIcon } from "@/components/ui/icons";
import "@/styles/pages/about.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.about");

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
  });
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-label__num">{num}</span>
      <span className="section-label__text">{label}</span>
      <span className="section-label__rule" aria-hidden="true"></span>
    </div>
  );
}

function Principle({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="principle">
      <span className="principle__letter" aria-hidden="true">
        {letter}
      </span>
      <h3 className="principle__title">{title}</h3>
      <p className="principle__text">{children}</p>
    </div>
  );
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  const highlight = (chunks: ReactNode) => (
    <span className="highlight">{chunks}</span>
  );
  const bold = (chunks: ReactNode) => <strong>{chunks}</strong>;

  return (
    <>
      <section className="about-page">
        <div className="container">
          {/* ===== HERO : title / description ===== */}
          <div className="row row--2">
            <h1 className="title-xl">{t.rich("title", { hl: highlight })}</h1>
            <div>
              <p className="lead">{t("lead1")}</p>
              <p className="lead">{t("lead2")}</p>
            </div>
          </div>

          {/* ===== 01 · NOTRE RAISON D'ÊTRE ===== */}
          <SectionLabel num={t("section1Num")} label={t("section1Label")} />

          <div className="row row--2">
            <h2 className="title-lg">{t("section1Title")}</h2>
            <p className="lead">{t("section1Lead")}</p>
          </div>

          <div className="row row--3">
            <Principle letter="A" title={t("p1aTitle")}>
              {t("p1aText")}
            </Principle>
            <Principle letter="B" title={t("p1bTitle")}>
              {t("p1bText")}
            </Principle>
            <Principle letter="C" title={t("p1cTitle")}>
              {t.rich("p1cText", {
                link: (chunks) => <Link href="/pricing">{chunks}</Link>,
              })}
            </Principle>
          </div>

          {/* ===== 02 · LA VISION ===== */}
          <SectionLabel num={t("section2Num")} label={t("section2Label")} />

          <div className="row row--2">
            <h2 className="title-lg">{t("section2Title")}</h2>
            <p className="lead">{t.rich("section2Lead", { b: bold })}</p>
          </div>

          <div className="row row--3">
            <Principle letter="A" title={t("p2aTitle")}>
              {t("p2aText")}
            </Principle>
            <Principle letter="B" title={t("p2bTitle")}>
              {t("p2bText")}
            </Principle>
            <Principle letter="C" title={t("p2cTitle")}>
              {t("p2cText")}
            </Principle>
          </div>

          {/* ===== 03 · LES ORIGINES ===== */}
          <SectionLabel num={t("section3Num")} label={t("section3Label")} />

          <div className="row row--2">
            <h2 className="title-lg">{t("section3Title")}</h2>

            <div>
              <p className="lead">{t("founderQuote1")}</p>
              <p className="lead">{t("founderQuote2")}</p>
              <div className="founder__link-wrapper">
                <a
                  href="https://www.roxaina.me"
                  className="founder__link"
                  target="_blank"
                  rel="noopener"
                >
                  {t("founderLink")}
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ===== 04 · LA SUITE ===== */}
          <SectionLabel num={t("section4Num")} label={t("section4Label")} />

          <div className="row row--2">
            <h2 className="title-lg">{t("section4Title")}</h2>
            <div>
              <p className="lead">{t("section4Lead1")}</p>
              <p className="lead">{t("section4Lead2")}</p>
            </div>
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
