"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

const Card = styled(motion.div)`
  background-color: #112240;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  flex-grow: 1;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const TechListItem = styled.li`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 0.875rem;
  color: #64ffda;
  background-color: rgba(100, 255, 218, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const cardVariants = {
  initial: { y: 0 },
  hover: { y: -5, transition: { duration: 0.2 } },
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card initial="initial" whileHover="hover" variants={cardVariants}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechList>
        {project.technologies.map((tech) => (
          <TechListItem key={tech}>{tech}</TechListItem>
        ))}
      </TechList>
    </Card>
  );
}
