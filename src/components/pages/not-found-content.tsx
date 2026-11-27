import type { ReactNode } from "react";
import { SparkleIcon } from "@/components/ui/icons";

type NotFoundContentProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  homeLabel: string;
  exploreLabel: string;
  homeHref: string;
  loginHref: string;
};

/**
 * Shared 404 markup. The original page has no header, footer or feedback pill,
 * so this renders only the error section.
 */
export function NotFoundContent({
  eyebrow,
  title,
  subtitle,
  homeLabel,
  exploreLabel,
  homeHref,
  loginHref,
}: NotFoundContentProps) {
  return (
    <main>
      <section className="error" aria-labelledby="error-title">
        <span className="error__sparkle error__sparkle--1" aria-hidden="true">
          <SparkleIcon />
        </span>
        <span className="error__sparkle error__sparkle--2" aria-hidden="true">
          <SparkleIcon />
        </span>

        <div className="container">
          <span className="error__eyebrow">{eyebrow}</span>

          <div className="error__digits" aria-hidden="true">
            <span className="error__digit error__digit--1">4</span>
            <span className="error__digit error__digit--2">0</span>
            <span className="error__digit error__digit--3">4</span>
          </div>

          <h1 className="error__title" id="error-title">
            {title}
          </h1>

          <p className="error__subtitle">{subtitle}</p>

          <div className="error__actions">
            <a href={homeHref} className="btn btn--primary">
              {homeLabel}
            </a>
            <a href={loginHref} className="btn btn--outline">
              {exploreLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
