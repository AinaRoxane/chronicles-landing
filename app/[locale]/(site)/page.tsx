import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { loginUrl } from "@/lib/routes";
import { CtaBand } from "@/components/sections/cta-band";
import { MetricsBand } from "@/components/sections/metrics-band";
import {
  BookIcon,
  GlobeIcon,
  LayersIcon,
  PenIcon,
  SparkleIcon,
} from "@/components/ui/icons";
import "@/styles/pages/home.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.home");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  const highlight = (chunks: ReactNode) => (
    <span className="highlight">{chunks}</span>
  );

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <span className="hero__sparkle hero__sparkle--1" aria-hidden="true">
          <SparkleIcon />
        </span>
        <span className="hero__sparkle hero__sparkle--2" aria-hidden="true">
          <SparkleIcon />
        </span>
        <span className="hero__sparkle hero__sparkle--3" aria-hidden="true">
          <SparkleIcon />
        </span>

        <div className="container">
          <h1 className="hero__title">{t.rich("heroTitle", { hl: highlight })}</h1>
          <p className="hero__subtitle">{t("heroSubtitle")}</p>
          <div className="hero__actions">
            <Link href="/creators" className="btn btn--primary">
              {t("heroWrite")}
            </Link>
            <a href={loginUrl(locale)} className="btn btn--outline">
              {t("heroRead")}
            </a>
          </div>
        </div>
      </section>

      {/* ===== METRICS — BD BAND ===== */}
      <MetricsBand
        items={[
          {
            icon: <GlobeIcon />,
            value: t("metricsLanguagesValue"),
            label: t("metricsLanguagesLabel"),
          },
          {
            icon: <LayersIcon />,
            value: t("metricsFormatsValue"),
            label: t("metricsFormatsLabel"),
          },
          {
            icon: <PenIcon />,
            value: t("metricsHumanValue"),
            label: t("metricsHumanLabel"),
          },
          {
            icon: <BookIcon />,
            value: t("metricsStoriesValue"),
            label: t("metricsStoriesLabel"),
          },
        ]}
      />

      {/* ===== MISSION ===== */}
      <section id="mission" className="mission">
        <div className="container">
          <article className="mission__panel">
            <span className="mission__marks" aria-hidden="true"></span>
            <span className="mission__eyebrow">{t("missionEyebrow")}</span>
            <h2 className="mission__title">
              {t("missionTitleLine1")}
              <br />
              {t("missionTitleLine2")}
            </h2>
            <div className="mission__body">
              <p>{t("missionBody1")}</p>
              <p>{t("missionBody2")}</p>
              <p>{t("missionBody3")}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="how">
        <div className="how__inner">
          <header className="how__header">
            <h2 className="section-title">
              {t.rich("howTitle", { hl: highlight })}
            </h2>
          </header>

          <div className="how__grid">
            <div className="how__center-line" aria-hidden="true"></div>

            <div
              className="how__blue-block how__blue-block--left"
              aria-hidden="true"
            >
              <BookIcon />
            </div>

            <div
              className="how__blue-block how__blue-block--right"
              aria-hidden="true"
            >
              <PenIcon />
            </div>

            <div className="how__group how__group--reader" aria-hidden="true">
              <BookIcon />
              <span>{t("readersGroup")}</span>
            </div>

            <div className="how__step how__step--reader-1">
              <span className="step-num-mobile">1</span>
              <h4 className="step__title">{t("reader1Title")}</h4>
              <p className="step__text">{t("reader1Text")}</p>
            </div>

            <div className="step-num step-num--1" aria-label="Étape 1">
              1
            </div>

            <div className="how__step how__step--creator-1">
              <span className="step-num-mobile">1</span>
              <h4 className="step__title">{t("creator1Title")}</h4>
              <p className="step__text">{t("creator1Text")}</p>
            </div>

            <div className="how__step how__step--reader-2">
              <span className="step-num-mobile">2</span>
              <h4 className="step__title">{t("reader2Title")}</h4>
              <p className="step__text">{t("reader2Text")}</p>
            </div>

            <div className="step-num step-num--2" aria-label="Étape 2">
              2
            </div>

            <div className="how__step how__step--creator-2">
              <span className="step-num-mobile">2</span>
              <h4 className="step__title">{t("creator2Title")}</h4>
              <p className="step__text">
                {t.rich("creator2Text", {
                  b: (chunks) => <strong>{chunks}</strong>,
                  link: (chunks) => <Link href="/pricing">{chunks}</Link>,
                })}
              </p>
            </div>

            <div className="how__step how__step--reader-3">
              <span className="step-num-mobile">3</span>
              <h4 className="step__title">{t("reader3Title")}</h4>
              <p className="step__text">{t("reader3Text")}</p>
            </div>

            <div className="step-num step-num--3" aria-label="Étape 3">
              3
            </div>

            <div className="how__group how__group--creator" aria-hidden="true">
              <PenIcon />
              <span>{t("creatorsGroup")}</span>
            </div>

            <div className="how__step how__step--creator-3">
              <span className="step-num-mobile">3</span>
              <h4 className="step__title">{t("creator3Title")}</h4>
              <p className="step__text">{t("creator3Text")}</p>
            </div>
          </div>
        </div>

        <p className="how__note">{t("howNote")}</p>

        <CtaBand
          headingLevel="h3"
          title={t("ctaTitle")}
          text={t("ctaText")}
          button={t("ctaButton")}
        />
      </section>
    </>
  );
}
