import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import SectionContainer from "@/components/SectionContainer";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

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
  const url = "https://tedckh.com";

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${url}/${locale}/blog/${slug}`,
      languages: {
        en: `${url}/en/blog/${slug}`,
        "zh-HK": `${url}/zh-HK/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${url}/${locale}/blog/${slug}`,
      siteName: "Ted Chiu's Blog",
      locale,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
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
