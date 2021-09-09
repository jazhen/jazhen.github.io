import React from "react";
import styled from "styled-components";
import ChevronsDown from "../icons/chevrons-down.inline.svg";
import * as Styled from "../styles";
import SVG from "./hero.inline.svg";

const Hero = () => (
  <Styled.Section>
    <Container>
      <Content>
        <Overline>👋 Hi, I&apos;m Jason Zhen</Overline>
        <Headline>
          Passionate about developing user-centered web experiences
        </Headline>
        <Styled.TextLink href="#projects">
          View my projects
          <ChevronsDown />
        </Styled.TextLink>
      </Content>
      <SVG />
    </Container>
  </Styled.Section>
);

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  place-items: center;
  gap: 4em;

  @media (min-width: 900px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
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
  color: var(--color-black-900);
`;

const Headline = styled.h1`
  font-family:var(--font-family-primary)};
  font-size: var(--font-size-4);
  font-weight: 500;
  letter-spacing: -0.0125em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: var(--color-black-900);
`;

export default Hero;
