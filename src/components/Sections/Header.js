import React from "react";
import styled from "styled-components";
import * as Styled from "./styles";

const Header = () => (
  <Nav>
    <Logo src="#">JASON&nbsp;ZHEN</Logo>
    <NavList>
      <Styled.TextLink href="#projects">projects</Styled.TextLink>
      <Styled.TextLink href="#about">about</Styled.TextLink>
      <Styled.TextLink href="#contact">contact</Styled.TextLink>
    </NavList>
  </Nav>
);

const Nav = styled.nav`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
`;

const NavList = styled.ul`
  display: flex;
`;

const Logo = styled(Styled.TextLink)`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
`;

export default Header;
