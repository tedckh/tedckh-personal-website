"use client";

import Link from "next/link";
import styled from "styled-components";
import { type PostData } from "@/lib/posts";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const BlogTitle = styled.h1`
  font-size: clamp(32px, 6vw, 48px);
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-bottom: 2rem;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: clamp(24px, 4vw, 32px);
    margin-bottom: 0.5rem;
    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  small {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

type BlogListProps = {
  posts: PostData[];
  title: string;
  locale: string;
};

export default function BlogList({ posts, title, locale }: BlogListProps) {
  return (
    <BlogContainer>
      <BlogTitle>{title}</BlogTitle>
      <PostList>
        {posts.map(({ id, date, title, excerpt }) => (
          <PostItem key={id}>
            <Link href={`/${locale}/blog/${id}`}>
              <h2>{title}</h2>
            </Link>
            <p>{excerpt}</p>
            <small>{new Date(date).toLocaleDateString(locale)}</small>
          </PostItem>
        ))}
      </PostList>
    </BlogContainer>
  );
}
