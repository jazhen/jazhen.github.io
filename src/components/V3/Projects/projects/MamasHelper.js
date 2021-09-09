import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../../icons/external-link.inline.svg";
import GithubIcon from "../../icons/github.inline.svg";
import * as Styled from "../../styles";
import SVG from "./mamas-helper.inline.svg";

const data = {
  header: "Mama's Helper",
  body: "A management assistance tool that helps individuals and teams organize, track, and manage their work.",
  overline: "Front End Lead",
  github: "https://github.com/jmcbgaston/mamas_helper",
  website: "https://mamas-helper.herokuapp.com",
  thumbnail:
    "https://user-images.githubusercontent.com/6326660/130603108-06f92f2b-1cc0-41af-b86d-219c9a6aff0f.png",
  technologies: ["React", "Redux", "Node", "MongoDB", "Sendgrid"],
};

const MamasHelper = () => {
  const { overline, header, body, github, website } = data;

  return (
    <Container>
      <Image>
        <SVG />
      </Image>
      <Content>
        <div>
          <Overline>{overline}</Overline>
          <Styled.H3>{header}</Styled.H3>
        </div>
        <div>
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
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Image = styled.div`
  background-color: #e99a53;
`;

const Content = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
  }
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 300;
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export default MamasHelper;
