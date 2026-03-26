"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

const ContactContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const EmailDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
  min-width: 70px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const textVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

export default function Contact() {
  const t = useTranslations("Contact");
  const email = "tedchiu94@gmail.com";
  const [copyStatus, setCopyStatus] = useState("Copy");
  const timeoutIdRef = useRef<NodeJS.Timeout>(null);

  const handleCopy = useCallback(async () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    await navigator.clipboard.writeText(email);
    setCopyStatus("Copied!");

    timeoutIdRef.current = setTimeout(() => {
      setCopyStatus("Copy");
    }, 2000);
  }, [email]);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return (
    <SectionContainer>
      <ContactContent>
        <SectionTitle>{t("title")}</SectionTitle>
        <ContactText>{t("text")}</ContactText>
        <EmailDisplay>
          {t("email")}
          <CopyButton onClick={handleCopy}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copyStatus}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                {copyStatus}
              </motion.span>
            </AnimatePresence>
          </CopyButton>
        </EmailDisplay>
      </ContactContent>
    </SectionContainer>
  );
}
