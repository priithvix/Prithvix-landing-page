import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const locales = ["en", "hi", "gu", "pa"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...routes,
  ];
}
