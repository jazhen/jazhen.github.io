import React from "react";
import styled from "styled-components";

const Header = () => (
  <Nav>
    <Logo src="#">JASON&nbsp;ZHEN</Logo>
    <NavList>
      <A href="#projects">projects</A>
      <A href="#about">about</A>
      <A href="#contact">contact</A>
    </NavList>
  </Nav>
);

const Nav = styled.nav`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3em;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.secondaryText};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;

const Logo = styled(A)`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.color.primaryText};
`;

export default Header;
