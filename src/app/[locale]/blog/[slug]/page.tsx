import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import SectionContainer from "@/components/SectionContainer";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import BlogPost from "@/components/BlogPost";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();
  return allPostsData.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    locale,
    pathname: `/blog/${slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <SectionContainer>
      <BlogPost post={postData} locale={locale} />
    </SectionContainer>
  );
}
