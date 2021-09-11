import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "../../icons/external-link.inline.svg";
import GithubIcon from "../../icons/github.inline.svg";
import * as Styled from "../../styles";
import SVG from "./groovetown.inline.svg";

const data = {
  header: "Groovetown",
  body: "An online music distribution website that enables its users to upload, download, and stream music.",
  overline: "Full Stack Engineer",
  github: "https://github.com/jazhen/groove_town",
  website: "https://groovetown.herokuapp.com",
  thumbnail:
    "https://user-images.githubusercontent.com/6326660/130603129-876d985d-2400-454d-a5eb-91ec37ec24b7.png",
  technologies: [
    "React",
    "Redux",
    "Ruby on Rails",
    "PostgreSQL",
    "HTML",
    "CSS",
  ],
};

const Groovetown = () => {
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
  margin-bottom: 6rem;
`;

const Image = styled.div`
  background-color: #ecc4d7;
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

export default Groovetown;
