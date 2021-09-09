import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";

const Nav = () => (
  <Section>
    <Container>
      <Logo href="/" target="_self">
        JASON&nbsp;ZHEN
      </Logo>
      <NavList>
        <Styled.TextLink href="#projects">projects</Styled.TextLink>
        <Styled.TextLink href="#experience">experience</Styled.TextLink>
        <Styled.TextLink href="#about">about</Styled.TextLink>
        <Styled.TextLink href="#contact">contact</Styled.TextLink>
      </NavList>
    </Container>
  </Section>
);

const Section = styled.nav`
  padding: 2em 1em;
  background-color: var(--color-white-900);

  @media (min-width: 900px) {
    padding: 2em 3em;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 1em;
`;

const Logo = styled(Styled.TextLink)`
  font-size: var(--font-size-1);
  font-weight: 700;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media (min-width: 900px) {
    gap: 2em;
  }
`;

export default Nav;
