import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/creators", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/announcement", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => {
    const url = `${siteConfig.siteUrl}${path === "/" ? "" : path}`;

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: url,
        },
      },
    };
  });
}
