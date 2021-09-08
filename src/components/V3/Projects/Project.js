import React from "react";
import styled from "styled-components";
import SVG from "../hero.inline.svg";
import ExternalLinkIcon from "../icons/external-link.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import * as Styled from "../styles";

const Project = ({ overline, header, body, github, website }) => (
  <Wrapper>
    <Container>
      <Content>
        <Overline>{overline}</Overline>
        <Styled.H3>{header}</Styled.H3>
        <Styled.BodyText>{body}</Styled.BodyText>
        <Styled.TextLink
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Styled.Icon>
            <GithubIcon />
          </Styled.Icon>
          Code
        </Styled.TextLink>
        <Styled.TextLink
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Styled.Icon>
            <ExternalLinkIcon />
          </Styled.Icon>
          Demo
        </Styled.TextLink>
      </Content>
      <SVG />
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  background-color: #f4e04e;
  background-image: linear-gradient(160deg, #f4e04e 60%, #c6588a 60.1%);
  padding: 4em;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center start;

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

export default Project;
