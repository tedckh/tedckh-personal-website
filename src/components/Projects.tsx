"use client";

import styled from "styled-components";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS_TO_SHOW_INITIALLY = 6;

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ShowMoreButton = styled(motion.button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: block;
  margin: 2rem auto 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}1A;
  }
`;

export default function Projects() {
  const t = useTranslations("Projects");
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, PROJECTS_TO_SHOW_INITIALLY);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      requestAnimationFrame(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    } else {
      setShowAll(true);
    }
  };

  return (
    <SectionContainer>
      <ProjectsContent>
        <SectionTitle>{t("title")}</SectionTitle>
        <ProjectsGrid
          variants={gridVariants}
          initial="hidden"
          animate={visibleProjects.length > 0 ? "visible" : "hidden"}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              index={index + 1}
              title={t(`${project.id}.title`)}
              description={t(`${project.id}.description`)}
              technologies={project.technologies}
              repoUrl={project?.repoUrl}
              liveUrl={project?.liveUrl}
              imageUrl={project?.imageUrl}
            />
          ))}
        </ProjectsGrid>
        {projectsData.length > PROJECTS_TO_SHOW_INITIALLY && (
          <ShowMoreButton
            ref={buttonRef}
            onClick={handleToggleShowAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? t("showLess") : t("showMore")}
          </ShowMoreButton>
        )}
      </ProjectsContent>
    </SectionContainer>
  );
}
