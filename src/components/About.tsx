"use client";

import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AboutContent = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 2rem;
`;

const BioCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const BioText = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.6;
  p {
    margin: 0 0 1rem 0;
  }
`;

const PullQuote = styled(motion.blockquote)`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
`;

export default function About() {
  const t = useTranslations("About");
  return (
    <SectionContainer>
      <AboutContent>
        <SectionTitle>{t("title")}</SectionTitle>
        <BioCard>
          <BioText
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <PullQuote variants={childVariants}>{t("bioText1")}</PullQuote>
            <PullQuote variants={childVariants}>{t("bioText2")}</PullQuote>
            <PullQuote variants={childVariants}>{t("bioText3")}</PullQuote>
          </BioText>
        </BioCard>
      </AboutContent>
    </SectionContainer>
  );
}
