"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
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
  background-color: ${({ theme }) => theme.colors.primary}1A;
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
