"use client";

import styled from "styled-components";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";

const ProjectsContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat() (auto-fill, minmax() (300px, 1fr));
  gap: 2rem;
`;

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <SectionContainer>
      <ProjectsContent>
        <SectionTitle>{t("title")}</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </SectionContainer>
  );
}
