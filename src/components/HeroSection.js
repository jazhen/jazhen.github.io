import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
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
  gap: 2em;
  padding: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  max-width: 50%;
`;

const HeroSection = () => (
  <HeroContainer>
    <ContentContainer>
      <div>
        <h1>Jason Zhen</h1>
        <h3>Full Stack Software Engineer</h3>
      </div>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />
    </ContentContainer>
  </HeroContainer>
);

export default HeroSection;
