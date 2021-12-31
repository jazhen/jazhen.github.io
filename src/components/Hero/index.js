import React from "react";
import styled from "styled-components";
import ChevronsDown from "../icons/chevrons-down.inline.svg";
import * as Styled from "../styles";

const Hero = () => (
  <Section>
    <Container>
      <LeftSection>
        <Styled.BodyTextLarge>👋 Hi, I&apos;m Jason Zhen</Styled.BodyTextLarge>
        <Headline>
          Passionate about developing user-centered web experiences
        </Headline>
        <Styled.TextLink href="#projects">
          View my projects
          <Styled.Icon>
            <ChevronsDown />
          </Styled.Icon>
        </Styled.TextLink>
      </LeftSection>
      <Avatar src="https://user-images.githubusercontent.com/6326660/132674478-50a8fb86-eec7-4072-b887-d577cbf35cf3.png" />
      <RightSection />
    </Container>
  </Section>
);

const Section = styled(Styled.Section)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 85vh;
    text-align: initial;
  }
`;

const Headline = styled.h1`
  font-family:var(--font-family-primary)};
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.0125em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: var(--color-black-900);
`;

const Avatar = styled(Styled.Img)`
  background-color: #b0bec5;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: 8 / span 2;
    grid-row: 1;
    z-index: 1;
    align-self: center;
    justify-self: center;
  }
`;

const LeftSection = styled.section`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: var(--padding-block-section);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: 2 / 8;
    grid-row: 1;
    align-self: center;
    justify-self: right;
    max-width: 50em;
    margin: 2em;
  }
`;

const RightSection = styled.section`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: 9 / -1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    background-color: blue;
  }
`;

export default Hero;
