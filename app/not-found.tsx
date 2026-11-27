import type { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/not-found-content";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import "@/styles/pages/not-found.css";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable — Chronicles MG" },
  description:
    "Cette page n'existe pas encore. Reviens à l'accueil ou explore les histoires Chronicles.",
};

/**
 * Fallback document for requests that never reach a valid `[locale]` segment
 * (e.g. `/unknown.txt`). The layout at `app/[locale]/layout.tsx` calls
 * `notFound()` for an invalid locale, and this is the nearest boundary above it.
 * Mirrors the original French 404 page, without header/footer/feedback.
 */
export default function RootNotFound() {
  return (
    <html lang="fr">
      <body>
        <NotFoundContent
          eyebrow="Erreur"
          title={
            <>
              Cette <span className="highlight">Page n&apos;existe pas</span>.
            </>
          }
          subtitle="Le contenu que tu cherches a peut-être été arrachée ou déplacée."
          homeLabel="Retour à l'accueil"
          exploreLabel="Explorer les histoires"
          homeHref="/"
          loginHref={`${siteConfig.appOrigin}/fr/auth/login`}
        />
      </body>
    </html>
  );
}
