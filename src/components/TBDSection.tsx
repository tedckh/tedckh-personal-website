"use client";

import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";

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

export default function TBDSection({
  titleNamespace,
}: {
  titleNamespace: string;
}) {
  const tTitle = useTranslations(titleNamespace);
  const tTBD = useTranslations("TBD");

  return (
    <SectionContainer>
      <TBDWrapper>
        <SectionTitle>{tTitle("title")}</SectionTitle>
        <Message>{tTBD("message")}</Message>
      </TBDWrapper>
    </SectionContainer>
  );
}
