import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../../icons/external-link.inline.svg";
import GithubIcon from "../../icons/github.inline.svg";
import * as Styled from "../../styles";
import SVG from "./water-the-trees.inline.svg";

const data = {
  header: "Water The Trees",
  body: "An open source tree mapping, planting, and maintenance platform partnered with Code for America, The Sierra Club, and Public Works.",
  overline: "Open Source Contributor",
  github: "https://github.com/waterthetrees",
  website: "https://waterthetrees.com",
  thumbnail:
    "https://user-images.githubusercontent.com/6326660/130603096-36a7d113-ee72-4fb2-9b3b-d8eb094d6098.png",
  technologies: ["React", "React-Query", "Node", "Mapbox", "Docker"],
};

const WaterTheTrees = () => {
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
          <Links>
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
          </Links>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 6em;
`;

const Image = styled.div`
  background-color: #bcaaa4;
`;

const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
  }
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-light);
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Links = styled.div`
  display: flex;
  gap: 2em;
`;

export default WaterTheTrees;
