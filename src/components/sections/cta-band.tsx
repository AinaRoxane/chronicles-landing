import { getLocale } from "next-intl/server";
import { loginUrl } from "@/lib/routes";

type CtaBandProps = {
  title: string;
  text: string;
  button: string;
  headingLevel?: "h2" | "h3";
};

/**
 * Blue wavy CTA band shared by every page (same markup as the original).
 */
export async function CtaBand({
  title,
  text,
  button,
  headingLevel = "h2",
}: CtaBandProps) {
  const locale = await getLocale();
  const Heading = headingLevel;

  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <div className="cta-band__text">
          <Heading>{title}</Heading>
          <p>{text}</p>
        </div>
        <div className="cta-band__cta">
          <a href={loginUrl(locale)} className="cta-band__btn">
            {button}
          </a>
        </div>
      </div>
    </section>
  );
}
