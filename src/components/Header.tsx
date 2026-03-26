"use client";

import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => `${theme.colors.background}BF`};
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">
          <motion.div
            whileHover={{ rotate: 720 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            TC
          </motion.div>
        </Logo>
        <ControlsWrapper>
          <LanguageSwitcher />
          <ThemeToggler />
        </ControlsWrapper>
      </Nav>
    </StyledHeader>
  );
}
