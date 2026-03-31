import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const URL = "https://tedckh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
      alternates: {
        languages: {
          en: `${URL}/en`,
          "zh-HK": `${URL}/zh-HK`,
        },
      },
    });
  });

  return sitemapEntries;
}
