import React from "react";
import styled from "styled-components";
import ChevronsDown from "../icons/chevrons-down.inline.svg";
import * as Styled from "../styles";
import File from "./file.inline.svg";

const About = () => (
  <Styled.Section>
    <Styled.SectionTitle id="about">About Me</Styled.SectionTitle>

    <TwoColumnContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/6326660?v=4" />
      <div>
        <Styled.BodyText>
          👋 Hi, my name is Jason&nbsp;Zhen and I am a full&nbsp;stack software
          engineer based in San&nbsp;Francisco. Currently I&apos;m contributing
          to on an open source project called Water&nbsp;The&nbsp;Trees, a
          platform that crowdsources tree mapping, planting, and maintenance.
        </Styled.BodyText>
        <Styled.BodyText>
          During my free time I enjoy reading comic books and listening to Indie
          music.
        </Styled.BodyText>
        <Styled.OutlinedLink href="#">
          my résumé
          <File />
        </Styled.OutlinedLink>
        <Styled.ContainedLink href="#contact">
          hire me
          <ChevronsDown />
        </Styled.ContainedLink>
      </div>
    </TwoColumnContainer>
  </Styled.Section>
);

const TwoColumnContainer = styled.div`
  display: grid;
  gap: 4em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-template-columns: auto 1fr;
  }
`;

const Avatar = styled(Styled.Img)`
  border-radius: var(--border-radius);
`;

export default About;
