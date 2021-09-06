import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import ChevronsDown from "./chevrons-down.inline.svg";

const Header = () => (
  <Container>
    <Overline>👋 Hi, I&apos;m Jason Zhen</Overline>
    <Headline>
      I build effective applications across the full&nbsp;stack
    </Headline>
    <Button href="#projects">
      View my projects
      <ChevronsDown />
    </Button>
  </Container>
);

const Container = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    text-align: initial;
  }
`;

const Overline = styled.h2`
  font-family:var(--font-family-primary)};
  font-size: var(--font-size-1);
  font-weight: 400;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.primaryText};
`;

const Headline = styled.h1`
  font-family:var(--font-family-primary)};
  font-size: var(--font-size-4);
  font-weight: 700};
  letter-spacing: -0.0125em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.primaryText};

`;

const Button = styled(Styled.ContainedLink)`
  font-size: var(--font-size-0);
`;

export default Header;
