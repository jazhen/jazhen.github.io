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
  background-color: var(--color-white-900);
  padding-block: 2em;
  padding-inline: var(--padding-inline-section);
`;

const Container = styled(Styled.Container)`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 2em;
  }
`;

export default Nav;
