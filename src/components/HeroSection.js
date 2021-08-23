import React from "react";
import styled from "styled-components";
import ContainedButton from "./Base/ContainedButton";
import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Img from "./Base/Img";
import OutlineButton from "./Base/OutlineButton";

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-attachment: fixed;
  background-image: url("https://jazhen.github.io/images/profile-background.jpg");
  background-position: center center;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      rgba(23, 24, 32, 0.95),
      rgba(23, 24, 32, 0.95)
    );
  }
`;

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1em, 0.4em + 3vw, 4em);

  position: relative;
  z-index: 1;

  @media (min-width: 50rem) {
    flex-direction: row;
  }
`;

const Avatar = styled(Img)`
  border-radius: 50%;
  max-width: min(60%, 20rem);

  @media (min-width: 50rem) {
    max-width: min(30%, 100%);
  }
`;

const HeroContent = styled.div`
  text-align: center;

  @media (min-width: 50rem) {
    text-align: inherit;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;

  @media (min-width: 50rem) {
    justify-content: inherit;
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <HeroContentContainer>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />
      <HeroContent>
        <H1>Jason Zhen</H1>
        <H2>Full Stack Software Engineer</H2>
        <H3>Recent graduate of UC&nbsp;Davis &amp; App&nbsp;Academy</H3>
        <HeroActions>
          <OutlineButton>contact</OutlineButton>
          <ContainedButton>résumé</ContainedButton>
        </HeroActions>
      </HeroContent>
    </HeroContentContainer>
  </HeroContainer>
);

export default HeroSection;
