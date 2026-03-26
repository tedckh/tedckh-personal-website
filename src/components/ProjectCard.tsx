"use client";

import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import SafeImage from "./SafeImage";
import { IconGitHub } from "./icons/IconGitHub";
import { IconExternal } from "./icons/IconExternal";
import { useModalActions } from "@/context/ModalContext";

const ProjectIndex = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary}15;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Card = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  overflow: hidden;
  cursor: pointer;
  &:hover ${ProjectIndex} {
    opacity: 1;
  }
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

const ImagePaddingWrapper = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9
  border-radius: 4px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 2;
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

type ProjectCardProps = {
  variants?: Variants;
  index: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrls?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export default function ProjectCard({
  variants,
  index,
  title,
  description,
  technologies,
  imageUrls,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  const { openModal } = useModalActions();

  const handleImageClick = () => {
    if (imageUrls && imageUrls.length > 0) {
      openModal(imageUrls);
    }
  };

  return (
    <Card
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={handleImageClick}
    >
      <ProjectIndex>{index.toString().padStart(2, "0")}</ProjectIndex>

      {imageUrls && imageUrls.length > 0 && (
        <ImagePaddingWrapper>
          <ImageContainer>
            <SafeImage src={imageUrls[0]} alt={title} />
          </ImageContainer>
        </ImagePaddingWrapper>
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
