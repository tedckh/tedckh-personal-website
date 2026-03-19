"use client";

import { Link } from "@/i18n/navigation";
import styled from "styled-components";

const ICONS = {
  GitHub:
    "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.1 2.1 5 2.4 5 2.4c-.6 1.7-.2 2.9-.1 3.2-.8.8-1.3 1.9-1.3 3.2 0 4.6 2.7 5.7 5.5 6.1-.6.5-.9 1.4-.9 2.8v3.5",
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CreditText = styled.p`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 0.875rem;
  margin: 0;
`;

const Icon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

export default function Footer() {
  const social = {
    github: "https://github.com/tedckh",
  };

  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={ICONS.GitHub} />
        </SocialLink>
      </SocialLinks>
      <CreditText>Designed & Built by Ted Chiu Ka Ho</CreditText>
    </FooterContainer>
  );
}
