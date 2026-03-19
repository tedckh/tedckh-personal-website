"use client";

import styled from "styled-components";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.section`
  margin-top: 100px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: #ccd6f6;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat() (auto-fill, minmax() (300px, 1fr));
  gap: 2rem;
`;

export default function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>My Work</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}
