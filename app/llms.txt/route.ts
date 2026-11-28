import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const PAGES = [
  {
    path: "",
    title: "Accueil",
    description:
      "Présentation de Chronicles MG : publier, lire, partager et soutenir les histoires malagasy.",
  },
  {
    path: "/creators",
    title: "Créateurs",
    description:
      "Publier des romans et des BD, fixer ses prix et construire son audience.",
  },
  {
    path: "/pricing",
    title: "Tarification",
    description:
      "Accès horaire, prix standard, Fast Pass et abonnements mensuels en ariary.",
  },
  {
    path: "/announcement",
    title: "Annonces",
    description: "Lancements et actualités de la communauté Chronicles MG.",
  },
  {
    path: "/about",
    title: "À propos",
    description: "Mission, vision et origine du projet Chronicles MG.",
  },
];

/**
 * llms.txt — curated Markdown overview for LLM / AI crawlers.
 * @see https://llmstxt.org
 */
export function GET() {
  const lines = [
    "# Chronicles MG",
    "",
    "> Chronicles MG est une plateforme malgache de lecture et de publication de webnovels et webcomics. Les lecteurs découvrent des histoires malagasy, les partagent et soutiennent leurs créateurs ; les auteurs et illustrateurs publient chapitre par chapitre et perçoivent leurs revenus localement (MVola, Orange Money, Airtel Money).",
    "",
    "Langue du site : français (fr).",
    `Application : ${siteConfig.appOrigin}`,
    "",
    "## Pages",
    "",
    ...PAGES.map(
      (page) => `- [${page.title}](${siteConfig.siteUrl}${page.path}) : ${page.description}`,
    ),
    "",
    "## Sujets",
    "",
    "- Webnovels et webcomics malagasy / malgaches",
    "- Histoires à Madagascar",
    "- Lire des histoires malagasy",
    "- Publier et monétiser ses histoires à Madagascar",
    "",
    "## Contact et réseaux",
    "",
    `- Email : ${siteConfig.feedbackEmail}`,
    `- TikTok : ${siteConfig.socials.tiktok}`,
    `- Facebook : ${siteConfig.socials.facebook}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
