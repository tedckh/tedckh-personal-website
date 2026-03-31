"use client";

import styled from "styled-components";
import { type PostData } from "@/lib/posts";

const BlogPostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    font-size: clamp(32px, 6vw, 48px);
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    opacity: 0.8;
    display: block;
    margin-bottom: 2rem;
  }

  .post-content {
    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.125rem;
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1.5rem auto;
      border-radius: 8px;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${({ theme }) => theme.colors.heading};
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    h6 {
      font-size: 1rem;
    }

    ul,
    ol {
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1rem;
      margin-left: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    code {
      background: ${({ theme }) => theme.colors.cardBackground};
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family:
        "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    }

    pre {
      background: ${({ theme }) => theme.colors.cardBackground};
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin-bottom: 1em;

      code {
        background: none;
        padding: 0;
        border-radius: 0;
      }
    }

    blockquote {
      border-left: 4px solid ${({ theme }) => theme.colors.primary};
      padding-left: 1rem;
      margin-left: 0;
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.9;
      font-style: italic;
    }
  }
`;

type BlogPostProps = {
  post: PostData;
  locale: string;
};

export default function BlogPost({ post, locale }: BlogPostProps) {
  return (
    <BlogPostContainer>
      <h1>{post.title}</h1>
      <small>{new Date(post.date).toLocaleDateString(locale)}</small>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
      />
    </BlogPostContainer>
  );
}
