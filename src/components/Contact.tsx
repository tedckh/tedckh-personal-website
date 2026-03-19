"use client";

import { useCallback, useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  margin: 100px auto;
  text-align: center;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #8892b0;
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const EmailButton = styled.a`
  display: inline-block;
  background-color: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  padding: 1rem 1.75rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const EmailDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  color: #8892b0;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #64ffda;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
`;

const contactText =
  "My inbox is always open. Whether you have a question, a proposal, or just want to say hi, I'll do my best to get back to you!";

export default function Contact() {
  const email = "tedchiu94@gmail.com";
  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(email);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  }, []);

  return (
    <ContactContainer>
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactText>{contactText}</ContactText>

      <EmailDisplay>
        {email}
        <CopyButton onClick={handleCopy}>{copyStatus}</CopyButton>
      </EmailDisplay>

      {/* //TODO: use mailto */}
      {/* <EmailButton href={`mailto:${email}`}>Say Hello</EmailButton> */}
    </ContactContainer>
  );
}
