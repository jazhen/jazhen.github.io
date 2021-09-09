import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../icons/external-link.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import SVG from "../planting.inline.svg";
import * as Styled from "../styles";

const Project = ({ overline, header, body, github, website }) => (
  <Wrapper>
    <Container>
      <SVG />
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
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  background-color: #f4e04e;
  background-image: linear-gradient(160deg, #f4e04e 60%, #c6588a 60.1%);
  padding: 4em 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  place-items: center start;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    gap: 4em;
  }
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0.5em 0.5em #5db2a5;
  padding: 2em;
  border-radius: 0.5em;
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 300;
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export default Project;
