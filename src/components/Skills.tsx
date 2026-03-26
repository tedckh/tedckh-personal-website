"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import { TechIcon } from "./icons/TechIcons";
import { useTranslations } from "next-intl";

const categorizedSkills = {
  Frontend: [
    { name: "JavaScript", iconKey: "javascript" },
    { name: "TypeScript", iconKey: "typescript" },
    { name: "React", iconKey: "react" },
    { name: "React Native", iconKey: "react-native" },
    { name: "Next.js", iconKey: "nextjs" },
    { name: "Styled Components", iconKey: "styled-component" },
    { name: "Framer Motion", iconKey: "framer-motion" },
    { name: "Zustand", iconKey: "zustand" },
    { name: "Mobx", iconKey: "mobx" },
    { name: "Mobx State Tree", iconKey: "mobx-state-tree" },
    { name: "Redux", iconKey: "redux" },
    { name: "Redux Thunk", iconKey: "redux-thunk" },
    { name: "jQuery", iconKey: "jquery" },
    { name: "TanStack Query", iconKey: "tanstack-query" },
    { name: "SignalR", iconKey: "signal-r" },
    { name: "CesiumJs", iconKey: "cesium-js" },
    { name: "Flv.js", iconKey: "flv" },
    { name: "Verdaccio", iconKey: "verdaccio" },
    { name: "Storybook", iconKey: "storybook" },
  ],
  Backend: [
    { name: "Node.js", iconKey: "node-js" },
    { name: "Express", iconKey: "express" },
    { name: "Socket.io", iconKey: "socket-io" },
    { name: "Jest", iconKey: "jest" },
    { name: "Python", iconKey: "python" },
    { name: "FastAPI", iconKey: "fast-api" },
    { name: "MSSQL", iconKey: "mssql" },
    { name: "PostgreSQL", iconKey: "postgresql" },
    { name: "Knex", iconKey: "knex" },
    { name: "Tensorflow", iconKey: "tensorflow" },
    { name: ".NET Core", iconKey: "dot-net-core" },
    { name: "Selenium", iconKey: "selenium" },
    { name: "Puppeteer", iconKey: "puppeteer" },
  ],
  "Cloud & DevOps": [
    { name: "Docker", iconKey: "docker" },
    { name: "SharePoint", iconKey: "sharepoint" },
    { name: "SPFx", iconKey: "spfx" },
    { name: "Intune", iconKey: "intune" },
    { name: "Vercel", iconKey: "vercel" },
    { name: "Git", iconKey: "git" },
    { name: "AWS", iconKey: "aws" },
    { name: "CI/CD", iconKey: "ci-cd" },
    { name: "Grafana", iconKey: "grafana" },
    { name: "Superset", iconKey: "superset" },
    { name: "Metabase", iconKey: "metabase" },
    { name: "K8s", iconKey: "k8s" },
  ],
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

const SkillName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin: 0;
`;

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <SectionContainer>
      <SkillsContent>
        <SectionTitle>{t("title")}</SectionTitle>
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
                <SkillCard
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <TechIcon iconKey={skill.iconKey} />
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        ))}
      </SkillsContent>
    </SectionContainer>
  );
}
