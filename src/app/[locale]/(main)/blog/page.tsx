import { getSortedPostsData } from "@/lib/posts";
import SectionContainer from "@/components/SectionContainer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/blog",
    ogType: "website",
  });
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
