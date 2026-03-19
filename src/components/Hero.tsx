"use client";

import { useTranslations } from "next-intl";
import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 60vh;
`;

const Name = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  margin: 0;
`;

const Title = styled.h2`
  font-size: clamp(30px, 7vw, 70px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 0.9;
`;

const Bio = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin-top: 25px;
`;

const CtaButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  padding: 1rem 1.75rem;
  margin-top: 50px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}1A;
  }
`;

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <HeroContainer>
      <Name>{t("name")}</Name>
      <Title>{t("title")}</Title>
      <Bio>{t("bio")}</Bio>
      <CtaButton>{t("button")}</CtaButton>
    </HeroContainer>
  );
}
