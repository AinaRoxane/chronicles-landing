import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/sections/cta-band";
import { MetricsBand } from "@/components/sections/metrics-band";
import {
  BookIcon,
  CalendarIcon,
  ClockIcon,
  UsersIcon,
} from "@/components/ui/icons";
import "@/styles/pages/pricing.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.pricing");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PricingPage() {
  const t = await getTranslations("Pricing");
  const highlight = (chunks: ReactNode) => (
    <span className="highlight">{chunks}</span>
  );

  return (
    <>
      <section className="pricing-page">
        <div className="container">
          <div className="pricing-intro">
            <h1 className="pricing-intro__title">
              {t.rich("title", { hl: highlight })}
            </h1>
            <p className="pricing-intro__lead">
              {t.rich("lead", { b: (chunks) => <strong>{chunks}</strong> })}
              <br />
              <br />
            </p>
          </div>
        </div>

        <MetricsBand
          label="Les quatre façons d'accéder aux œuvres"
          items={[
            {
              icon: <ClockIcon />,
              value: t("metricsHourlyValue"),
              label: t("metricsHourlyLabel"),
            },
            {
              icon: <BookIcon />,
              value: t("metricsStandardValue"),
              label: t("metricsStandardLabel"),
            },
            {
              icon: <CalendarIcon />,
              value: t("metricsSubscriptionValue"),
              label: t("metricsSubscriptionLabel"),
            },
            {
              icon: <UsersIcon />,
              value: t("metricsShareValue"),
              label: t("metricsShareLabel"),
            },
          ]}
        />

        <div className="container">
          {/* ===== 1. HOURLY ACCESS ===== */}
          <section className="pricing-section">
            <header className="pricing-section__header">
              <h2 className="pricing-section__title">{t("hourlyTitle")}</h2>
              <p className="pricing-section__subtitle">{t("hourlySubtitle")}</p>
            </header>

            <div className="table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{t("hourlyColFormat")}</th>
                    <th>{t("hourlyColPrice")}</th>
                    <th>{t("hourlyColPercent")}</th>
                    <th>{t("hourlyColDuration")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-table__format">{t("hourlyFormat")}</td>
                    <td className="pricing-table__price">
                      {t("hourlyPrice")} <small>Ar</small>
                    </td>
                    <td style={{ textAlign: "center" }}>{t("hourlyPercent")}</td>
                    <td style={{ textAlign: "center" }}>{t("hourlyDuration")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== 2. STANDARD PRICING ===== */}
          <section className="pricing-section">
            <header className="pricing-section__header">
              <h2 className="pricing-section__title">{t("standardTitle")}</h2>
              <p className="pricing-section__subtitle">
                {t("standardSubtitle")}
              </p>
            </header>

            <div className="table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{t("standardColFormat")}</th>
                    <th>{t("standardColPrice")}</th>
                    <th>{t("standardColPercent")}</th>
                    <th>{t("standardColEarn")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-table__format">
                      {t("standardRomanFormat")}
                    </td>
                    <td className="pricing-table__price">
                      {t("standardRomanPrice")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("standardRomanPercent")}
                    </td>
                    <td className="pricing-table__earn">
                      {t("standardRomanEarn")} <small>Ar</small>
                    </td>
                  </tr>
                  <tr>
                    <td className="pricing-table__format">
                      {t("standardBdFormat")}
                    </td>
                    <td className="pricing-table__price">
                      {t("standardBdPrice")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("standardBdPercent")}
                    </td>
                    <td className="pricing-table__earn">
                      {t("standardBdEarn")} <small>Ar</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== 3. FAST PASS ===== */}
          <section className="pricing-section">
            <header className="pricing-section__header">
              <h2 className="pricing-section__title">{t("fastPassTitle")}</h2>
              <p className="pricing-section__subtitle">
                {t("fastPassSubtitle")} <br />
                <em>{t("fastPassNote")}</em>
              </p>
            </header>

            <div className="table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{t("fastPassColFormat")}</th>
                    <th>{t("fastPassColFloor")}</th>
                    <th>{t("fastPassColCeiling")}</th>
                    <th>{t("fastPassColPercent")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-table__format">
                      {t("fastPassRomanFormat")}
                    </td>
                    <td className="pricing-table__price">
                      {t("fastPassFloorRoman")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__price">
                      {t("fastPassCeiling")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("fastPassPercent")}
                    </td>
                  </tr>
                  <tr>
                    <td className="pricing-table__format">
                      {t("fastPassBdFormat")}
                    </td>
                    <td className="pricing-table__price">
                      {t("fastPassFloorBd")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__price">
                      {t("fastPassCeiling")} <small>Ar</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("fastPassPercent")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== 4. SUBSCRIPTIONS ===== */}
          <section className="pricing-section">
            <header className="pricing-section__header">
              <h2 className="pricing-section__title">
                {t("subscriptionsTitle")}
              </h2>
              <p className="pricing-section__subtitle">
                {t("subscriptionsSubtitle")}
              </p>
            </header>

            <div className="table-wrap">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>{t("subscriptionsColPlan")}</th>
                    <th>{t("subscriptionsColPrice")}</th>
                    <th>{t("subscriptionsColPercent")}</th>
                    <th>{t("subscriptionsColEarn")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pricing-table__format">
                      {t("subscriptionsReaderName")}
                      <br />
                      <small
                        style={{
                          color: "var(--gray-600)",
                          fontWeight: 500,
                          fontSize: "0.82rem",
                        }}
                      >
                        {t("subscriptionsReaderNote")}
                      </small>
                    </td>
                    <td className="pricing-table__price">
                      {t("subscriptionsReaderPrice")}{" "}
                      <small>{t("subscriptionsUnit")}</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("subscriptionsPercent")}
                    </td>
                    <td className="pricing-table__earn">
                      {t("subscriptionsReaderEarn")} <small>Ar</small>
                    </td>
                  </tr>
                  <tr>
                    <td className="pricing-table__format">
                      {t("subscriptionsSuperfanName")}
                      <br />
                      <small
                        style={{
                          color: "var(--gray-600)",
                          fontWeight: 500,
                          fontSize: "0.82rem",
                        }}
                      >
                        {t("subscriptionsSuperfanNote")}
                      </small>
                    </td>
                    <td className="pricing-table__price">
                      {t("subscriptionsSuperfanPrice")}{" "}
                      <small>{t("subscriptionsUnit")}</small>
                    </td>
                    <td className="pricing-table__pct">
                      {t("subscriptionsPercent")}
                    </td>
                    <td className="pricing-table__earn">
                      {t("subscriptionsSuperfanEarn")} <small>Ar</small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
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
