import { getSortedPostsData } from "@/lib/posts";
import SectionContainer from "@/components/SectionContainer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import BlogList from "@/components/BlogList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const url = "https://tedckh.com";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${url}/${locale}/blog`,
      languages: {
        en: `${url}/en/blog`,
        "zh-HK": `${url}/zh-HK/blog`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${url}/${locale}/blog`,
      siteName: "Ted Chiu's Blog",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const allPostsData = getSortedPostsData();
  const t = await getTranslations("Blog");

  return (
    <SectionContainer>
      <BlogList posts={allPostsData} title={t("title")} locale={locale} />
    </SectionContainer>
  );
}
