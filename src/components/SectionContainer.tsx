"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactNode } from "react";
import { sectionVariants } from "@/utils/animations";

const StyledSection = styled(motion.section)`
  margin: 100px 0;
`;

export default function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StyledSection
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </StyledSection>
  );
}
