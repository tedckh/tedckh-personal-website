"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";

const categorizedSkills = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Styled Components",
    "Framer Motion",
    "TanStack Query",
  ],
  Backend: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
  "Cloud & DevOps": ["Docker", "AWS", "Vercel", "Git"],
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillsContent = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LogoPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
`;

const SkillName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin: 0;
`;

export default function Skills() {
  return (
    <SectionContainer>
      <SkillsContent>
        <SectionTitle>My Tech Stack</SectionTitle>
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsGrid
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skills.map((skill) => (
                <SkillCard key={skill} variants={cardVariants}>
                  <LogoPlaceholder />
                  <SkillName>{skill}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        ))}
      </SkillsContent>
    </SectionContainer>
  );
}
