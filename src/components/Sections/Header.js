import React from "react";
import styled from "styled-components";
import * as Styled from "./styles";

const Header = () => (
  <Nav>
    <Logo src="#">JASON&nbsp;ZHEN</Logo>
    <NavList>
      <NavListItem href="#projects">projects</NavListItem>
      <NavListItem href="#about">about</NavListItem>
      <NavListItem href="#contact">contact</NavListItem>
    </NavList>
  </Nav>
);

const Nav = styled.nav`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`;

const Logo = styled(Styled.TextLink)`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5em;
`;

const NavListItem = styled(Styled.TextLink)`
  font-size: 0.875rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export default Header;
