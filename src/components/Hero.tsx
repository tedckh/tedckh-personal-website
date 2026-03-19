"use client";

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
  color: #ccd6f6;
  margin: 0;
`;

const Title = styled.h2`
  font-size: clamp(30px, 7vw, 70px);
  font-weight: 600;
  color: #8892b0;
  margin: 0;
  line-height: 0.9;
`;

const Bio = styled.p`
  font-size: 1.125rem;
  color: #8892b0;
  max-width: 600px;
  margin-top: 25px;
`;

const CtaButton = styled.button`
  background-color: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  padding: 1rem 1.75rem;
  margin-top: 50px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <Name>Ted Chiu Ka Ho</Name>
      <Title>Senior Analysis Programmer</Title>
      {/* //TODO: calc the year so that i don't need to update it */}
      <Bio>
        A passionate developer with 5 years of experience, dedicated to crafting
        scalable backend system and intuitive frontend experiences.
      </Bio>
      <CtaButton>View My Work</CtaButton>
    </HeroContainer>
  );
}
