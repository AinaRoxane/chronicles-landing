import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { loginUrl } from "@/lib/routes";
import { CtaBand } from "@/components/sections/cta-band";
import "@/styles/pages/creators.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.creators");

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/creators",
  });
}

const FEATURES = [1, 2, 3, 4] as const;
const ACCEPT_ITEMS = [1, 2, 3, 4] as const;
const REFUSE_ITEMS = [1, 2, 3, 4] as const;

export default async function CreatorsPage() {
  const t = await getTranslations("Creators");
  const locale = await getLocale();
  const highlight = (chunks: ReactNode) => (
    <span className="highlight">{chunks}</span>
  );
  const bold = (chunks: ReactNode) => <strong>{chunks}</strong>;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-creators">
        <div className="container">
          <div className="hero-creators__content">
            <h1 className="hero-creators__title">
              {t.rich("title", { hl: highlight })}
            </h1>
            <p className="hero-creators__subtitle">{t("subtitle")}</p>
            <div className="hero-creators__actions">
              <a
                href={loginUrl(locale)}
                className="hero-creators__btn hero-creators__btn--primary"
              >
                {t("primaryCta")}
              </a>
              <Link
                href="/pricing"
                className="hero-creators__btn hero-creators__btn--outline"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLUE WAVE WITH CARDS ===== */}
      <section className="wave-band">
        <div className="container">
          <div className="features">
            {FEATURES.map((index) => (
              <article className="feature" key={index}>
                <h3 className="feature__title">{t(`feature${index}Title`)}</h3>
                <p className="feature__text">{t(`feature${index}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RULES ===== */}
      <section className="rules-section">
        <div className="container">
          <header className="rules-section__header">
            <span className="section__eyebrow">{t("rulesEyebrow")}</span>
            <h2 className="rules-section__title">
              {t.rich("rulesTitle", {
                hl: (chunks) => (
                  <span className="rules-section__accent">{chunks}</span>
                ),
              })}
            </h2>
            <p className="rules-section__lead">{t("rulesLead")}</p>
          </header>

          <div className="rules">
            <div className="rules__col rules__col--accept">
              <h3 className="rules__heading">
                <span className="rules__badge" aria-hidden="true">
                  ✦
                </span>
                {t("acceptHeading")}
              </h3>
              <ul className="rules__list">
                {ACCEPT_ITEMS.map((index) => (
                  <li key={index}>{t.rich(`accept${index}`, { b: bold })}</li>
                ))}
              </ul>
            </div>

            <div className="rules__col rules__col--refuse">
              <h3 className="rules__heading">
                <span
                  className="rules__badge rules__badge--refuse"
                  aria-hidden="true"
                >
                  ✕
                </span>
                {t("refuseHeading")}
              </h3>
              <ul className="rules__list">
                {REFUSE_ITEMS.map((index) => (
                  <li key={index}>{t.rich(`refuse${index}`, { b: bold })}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO CAN JOIN ===== */}
      <section className="who">
        <div className="container">
          <header className="who__header">
            <span className="section__eyebrow">{t("whoEyebrow")}</span>
            <h2 className="who__title">
              {t.rich("whoTitle", {
                u: (chunks) => <span className="underline">{chunks}</span>,
              })}
            </h2>
            <p className="who__lead">{t.rich("whoLead", { b: bold })}</p>
          </header>

          <div className="who__grid">
            <article className="who-card who-card--reader">
              <header className="who-card__head">
                <span className="who-card__label">{t("readerLabel")}</span>
              </header>
              <h3 className="who-card__headline">{t("readerHeadline")}</h3>
              <p className="who-card__note">{t("readerNote")}</p>
            </article>

            <article className="who-card who-card--creator">
              <header className="who-card__head">
                <span className="who-card__label">{t("creatorLabel")}</span>
              </header>
              <h3 className="who-card__headline">{t("creatorHeadline")}</h3>
              <p className="who-card__note">{t("creatorNote")}</p>
            </article>
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
