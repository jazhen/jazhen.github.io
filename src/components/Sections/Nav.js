import React from "react";
import styled from "styled-components";
import * as Styled from "./styles";

const Nav = () => (
  <Container>
    <Logo src="#">JASON&nbsp;ZHEN</Logo>
    <NavList>
      <Styled.TextLink href="#projects">projects</Styled.TextLink>
      <Styled.TextLink href="#about">about</Styled.TextLink>
      <Styled.TextLink href="#contact">contact</Styled.TextLink>
    </NavList>
  </Container>
);

const Container = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`;

const Logo = styled(Styled.TextLink)`
  font-size: var(--font-size-1);
  font-weight: 700;
  font-style: italic;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2em;
`;

export default Nav;
