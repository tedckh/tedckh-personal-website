"use client";

import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";

const AboutContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BioText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;

  p {
    margin: 0 0 15px 0;
  }
`;

const PhotoContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
`;

//TODO
const bioTexts = [
  "Hello! I'm Ted, a developer based in Hong Kong. My journey into the world of programming started 5 years ago when I ...",
  "Throughout my career, I've had the privilege of working on a variety of projects, from ...",
  "When I'm not at the keyboard, I enjoy ...",
];

export default function About() {
  const t = useTranslations("About");
  return (
    <SectionContainer>
      <AboutContent>
        <SectionTitle>{t("title")}</SectionTitle>
        <AboutGrid>
          <BioText>
            {bioTexts.map((text, index) => (
              <p key={`bio-${index}`}>{text}</p>
            ))}
          </BioText>
          <PhotoContainer>
            <PhotoPlaceholder />
          </PhotoContainer>
        </AboutGrid>
      </AboutContent>
    </SectionContainer>
  );
}
