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
  HeartIcon,
  LayersIcon,
  LinkIcon,
  MessageIcon,
  PenIcon,
  SparkleIcon,
  UserPlusIcon,
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
          <div className="mission__header">
            <span className="eyebrow">{t("missionEyebrow")}</span>
          </div>

          <div className="mission__row">
            <div className="mission__illustration" aria-hidden="true">
              <span className="mission__sparkle mission__sparkle--1">
                <SparkleIcon />
              </span>
              <span className="mission__sparkle mission__sparkle--2">
                <SparkleIcon />
              </span>

              <div className="mission__tile mission__tile--reader">
                <BookIcon />
                <span className="mission__tile-lines">
                  <span className="mission__tile-line mission__tile-line--wide" />
                  <span className="mission__tile-line mission__tile-line--narrow" />
                </span>
              </div>

              <div className="mission__tile mission__tile--creator">
                <PenIcon />
                <span className="mission__tile-lines">
                  <span className="mission__tile-line mission__tile-line--wide" />
                  <span className="mission__tile-line mission__tile-line--narrow" />
                </span>
              </div>
            </div>

            <div className="mission__content">
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
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section id="communaute" className="community">
        <div className="container">
          <div className="community__badge-row">
            <span className="eyebrow">{t("communityEyebrow")}</span>
          </div>

          <div className="community__row">
            <div className="community__content">
              <h2 className="community__title">
                {t.rich("communityTitle", { hl: highlight })}
              </h2>
              <p className="community__intro">{t("communityIntro")}</p>

              <div className="community__item">
                <h3 className="community__item-title">
                  {t("communityDiscoverTitle")}
                </h3>
                <p className="community__item-text">
                  {t("communityDiscoverText")}
                </p>
              </div>

              <div className="community__item">
                <h3 className="community__item-title">
                  {t("communityExchangeTitle")}
                </h3>
                <p className="community__item-text">
                  {t("communityExchangeText")}
                </p>
              </div>

              <div className="community__item">
                <h3 className="community__item-title">
                  {t("communityShareTitle")}
                </h3>
                <p className="community__item-text">
                  {t("communityShareText")}
                </p>
              </div>

              <div className="community__item">
                <h3 className="community__item-title">
                  {t("communityStayTitle")}
                </h3>
                <p className="community__item-text">
                  {t("communityStayText")}
                </p>
              </div>
            </div>

            <div className="community__illustration" aria-hidden="true">
              <article className="post-mock">
                <header className="post-mock__head">
                  <span className="post-mock__avatar" />
                  <span className="post-mock__meta">
                    <span className="post-mock__name" />
                    <span className="post-mock__time" />
                  </span>
                  <span className="post-mock__follow">
                    <UserPlusIcon />
                  </span>
                </header>

                <div className="post-mock__body">
                  <span className="post-mock__line" />
                  <span className="post-mock__line" />
                  <span className="post-mock__line post-mock__line--short" />
                </div>

                <footer className="post-mock__actions">
                  <span className="post-mock__action post-mock__action--active">
                    <HeartIcon />
                  </span>
                  <span className="post-mock__action">
                    <MessageIcon />
                  </span>
                  <span className="post-mock__action">
                    <LinkIcon />
                  </span>
                </footer>
              </article>
            </div>
          </div>
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

          <div className="how-cards">
            <article className="how-card">
              <header className="how-card__head">
                <span className="how-card__icon" aria-hidden="true">
                  <BookIcon />
                </span>
                <span className="how-card__badge">{t("readersGroup")}</span>
              </header>

              <ol className="how-steps">
                <li className="how-step">
                  <span className="how-step__num">1</span>
                  <div>
                    <h3 className="how-step__title">{t("reader1Title")}</h3>
                    <p className="how-step__text">{t("reader1Text")}</p>
                  </div>
                </li>
                <li className="how-step">
                  <span className="how-step__num">2</span>
                  <div>
                    <h3 className="how-step__title">{t("reader2Title")}</h3>
                    <p className="how-step__text">{t("reader2Text")}</p>
                  </div>
                </li>
                <li className="how-step">
                  <span className="how-step__num">3</span>
                  <div>
                    <h3 className="how-step__title">{t("reader3Title")}</h3>
                    <p className="how-step__text">{t("reader3Text")}</p>
                  </div>
                </li>
              </ol>
            </article>

            <article className="how-card">
              <header className="how-card__head">
                <span className="how-card__icon" aria-hidden="true">
                  <PenIcon />
                </span>
                <span className="how-card__badge">{t("creatorsGroup")}</span>
              </header>

              <ol className="how-steps">
                <li className="how-step">
                  <span className="how-step__num">1</span>
                  <div>
                    <h3 className="how-step__title">{t("creator1Title")}</h3>
                    <p className="how-step__text">{t("creator1Text")}</p>
                  </div>
                </li>
                <li className="how-step">
                  <span className="how-step__num">2</span>
                  <div>
                    <h3 className="how-step__title">{t("creator2Title")}</h3>
                    <p className="how-step__text">
                      {t.rich("creator2Text", {
                        b: (chunks) => <strong>{chunks}</strong>,
                        link: (chunks) => <Link href="/pricing">{chunks}</Link>,
                      })}
                    </p>
                  </div>
                </li>
                <li className="how-step">
                  <span className="how-step__num">3</span>
                  <div>
                    <h3 className="how-step__title">{t("creator3Title")}</h3>
                    <p className="how-step__text">{t("creator3Text")}</p>
                  </div>
                </li>
              </ol>
            </article>
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
