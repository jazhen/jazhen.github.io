import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import H1 from "./Base/H1";
import H3 from "./Base/H3";
import Image from "./Base/Image";

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  background-color: var(--color-black);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  // padding: 2em;

  @media (min-width: 600px) {
    // flex-direction: row;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const HeroContent = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  text-align: center;
`;

const HeroSection = () => (
  <HeroContainer>
    <ContentContainer>
      <HeroContent>
        <H1>Jason Zhen</H1>
        <H3>Full Stack Software Engineer</H3>
      </HeroContent>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />
    </ContentContainer>
  </HeroContainer>
);

export default HeroSection;
