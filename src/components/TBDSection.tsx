"use client";

import styled from "styled-components";
import SectionContainer from "./SectionContainer";

const TBDWrapper = styled.div`
  background-color: transparent;
  border: 2px dashed ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
`;

export default function TBDSection({ title }: { title: string }) {
  return (
    <SectionContainer>
      <TBDWrapper>
        <SectionTitle>{title}</SectionTitle>
        <Message>
          Content coming soon. This section is a work in progress.
        </Message>
      </TBDWrapper>
    </SectionContainer>
  );
}
