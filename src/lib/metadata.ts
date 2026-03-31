import { Metadata } from "next";

const BASE_URL = "https://tedckh.com";
const SITE_NAME = "Ted Chiu's PersonalWebsite";

type MetadataProps = {
  title: string;
  description: string;
  locale: string;
  pathname: string;
  ogType?: "website" | "article";
  publishedTime?: string;
};

export function createMetadata({
  title,
  description,
  locale,
  pathname,
  ogType = "website",
  publishedTime,
}: MetadataProps): Metadata {
  const url = `${BASE_URL}/${locale}${pathname}`;
  const enUrl = `${BASE_URL}/en${pathname}`;
  const zhHKUrl = `${BASE_URL}/zh-HK${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        "zh-HK": zhHKUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      type: ogType,
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
