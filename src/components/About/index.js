import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ChevronsDown from "../icons/chevrons-down.inline.svg";
import * as Styled from "../styles";
import File from "./file.inline.svg";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const resume = data.allFile.edges[0].node.publicURL;

  return (
    <Styled.Section>
      <Styled.Container>
        <H1 id="about">Who Am I</H1>
        <Content>
          <Avatar src="https://user-images.githubusercontent.com/6326660/132674478-50a8fb86-eec7-4072-b887-d577cbf35cf3.png" />
          <div>
            <Styled.BodyText>
              👋 Hi, my name is Jason&nbsp;Zhen and I am a full&nbsp;stack
              software engineer based in San&nbsp;Francisco. Currently I&apos;m
              contributing to an open source project called
              Water&nbsp;The&nbsp;Trees, a platform that crowdsources tree
              mapping, planting, and maintenance.
            </Styled.BodyText>
            <Styled.BodyText>
              During my free time I enjoy reading comic books and listening to
              Indie music.
            </Styled.BodyText>
            <Links>
              <Styled.TextLink
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                my résumé
                <File />
              </Styled.TextLink>
              <Styled.TextLink href="#contact">
                hire me
                <ChevronsDown />
              </Styled.TextLink>
            </Links>
          </div>
        </Content>
      </Styled.Container>
    </Styled.Section>
  );
};

const H1 = styled.h1`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

const Content = styled.div`
  display: grid;
  gap: 4em;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
  }
`;

const Avatar = styled(Styled.ResponsiveImg)`
  background-color: #5c6bc0;
`;

const Links = styled.ul`
  display: flex;
  gap: 2em;
`;

export default About;
