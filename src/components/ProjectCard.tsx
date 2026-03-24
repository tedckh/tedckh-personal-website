"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import { IconGitHub } from "./icons/IconGitHub";
import { IconExternal } from "./icons/IconExternal";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
};

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.heading};
  margin: 0;
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
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.tag.text};
  background-color: ${({ theme }) => theme.tag.background};
`;

const cardVariants = {
  initial: { y: 0 },
  hover: { y: -5, transition: { duration: 0.2 } },
};

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card initial="initial" whileHover="hover" variants={cardVariants}>
      {imageUrl && (
        <ImageContainer>
          <SafeImage src={imageUrl} alt={title} />
        </ImageContainer>
      )}
      <ContentWrapper>
        <CardHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <CardLinks>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                <IconGitHub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Site Link"
              >
                <IconExternal />
              </a>
            )}
          </CardLinks>
        </CardHeader>
        <ProjectDescription>{description}</ProjectDescription>
        <TechList>
          {technologies.map((tech) => (
            <TechListItem key={tech}>{tech}</TechListItem>
          ))}
        </TechList>
      </ContentWrapper>
    </Card>
  );
}
