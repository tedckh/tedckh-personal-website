"use client";

import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";

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

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">TC</Logo>
        <ThemeToggler />
      </Nav>
    </StyledHeader>
  );
}
