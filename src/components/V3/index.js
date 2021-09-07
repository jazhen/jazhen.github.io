import React from "react";
import styled from "styled-components";
import SVG from "./hero.inline.svg";
import ExternalLinkIcon from "./icons/external-link.inline.svg";
import GithubIcon from "./icons/github.inline.svg";
import * as Styled from "./styles";

const V3 = () => (
  <Section>
    <Container>
      <Content>
        <Overline>Open Source Contributor</Overline>
        <Styled.H3>Water The Trees</Styled.H3>
        <Styled.BodyText>
          An open source tree mapping, planting, and maintenance platform
          partnered with Code for America, The Sierra Club, and Public Works.
        </Styled.BodyText>
        <Styled.TextLink href="#" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          Code
        </Styled.TextLink>
        <Styled.TextLink href="#" target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon />
          Demo
        </Styled.TextLink>
      </Content>
      <SVG />
    </Container>
  </Section>
);

const Section = styled.section`
  background-color: #f4e04e;
  background-image: linear-gradient(160deg, #f4e04e 60%, #c6588a 60.1%);
  padding: 2em;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  place-items: center;

  @media (min-width: 900px) {
    grid-auto-flow: column;
    gap: 2em;
  }
`;

const Content = styled.div``;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 300;
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export default V3;
