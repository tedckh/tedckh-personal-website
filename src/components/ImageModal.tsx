"use client";

import { useModalActions, useModalState } from "@/context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { IconClose } from "./icons/IconClose";
import Image from "next/image";
import { IconPrev } from "./icons/IconPrev";
import { IconNext } from "./icons/IconNext";

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 80vh;

  @media (hover: hover) {
    &:hover .nav-button {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 101;
  top: -40px;
  right: -20px;

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  z-index: 10;

  opacity: 1;

  @media (hover: hover) {
    opacity: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function ImageModal() {
  const { isOpen, images } = useModalState();
  const { closeModal } = useModalActions();
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const handleNext = useCallback(() => {
    setPage([(currentIndex + 1) % images.length, 1]);
  }, [currentIndex, images.length]);

  const handlePrev = useCallback(() => {
    setPage([(currentIndex - 1 + images.length) % images.length, -1]);
  }, [currentIndex, images.length]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage([0, 0]);
  }, [images]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>
              <IconClose />
            </CloseButton>
            <ImageWrapper>
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>
            </ImageWrapper>
            {images.length > 1 && (
              <>
                <NavButton className="prev nav-button" onClick={handlePrev}>
                  <IconPrev />
                </NavButton>
                <NavButton className="next nav-button" onClick={handleNext}>
                  <IconNext />
                </NavButton>
              </>
            )}
          </ModalContent>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
