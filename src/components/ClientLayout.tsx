"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import ImageModal from "./ImageModal";
import { ModalProvider } from "@/context/ModalContext";

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <ImageModal />
    </ModalProvider>
  );
}
