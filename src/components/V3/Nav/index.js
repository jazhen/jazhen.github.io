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
        <Styled.TextLink href="#contact">contact</Styled.TextLink>
      </NavList>
    </Container>
  </Section>
);

const Section = styled.nav`
  background-color: #eeeeee;
  padding: 2em;

  @media (min-width: 900px) {
    padding: 2em 4em;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Styled.TextLink)`
  font-size: var(--font-size-1);
  font-weight: 700;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1em;
`;

export default Nav;
