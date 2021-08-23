import React from "react";
import styled from "styled-components";
import H1 from "./Base/H1";
import H2 from "./Base/H2";
import H3 from "./Base/H3";
import Image from "./Base/Image";

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

    background-image: -moz-linear-gradient(
      rgba(23, 24, 32, 0.95),
      rgba(23, 24, 32, 0.95)
    );
  }
`;

const Avatar = styled(Image)`
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

const HeroActions = styled.div``;

const Button = styled.button`
  padding: 0.5em 1.25em;
  text-transform: uppercase;

  background: transparent;
  border-radius: var(--border-radius-rounded);
  border: 2px solid #6200ee;
  color: #6200ee;
  font-size: 0.8rem;
  font-size: clamp(0.8rem, 0.6666666666666667rem + 0.6666666666666665vw, 1rem);
  letter-spacing: 0.0625em;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:not(:first-child) {
    margin-left: 1em;
  }

  @media (min-width: 50rem) {
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

const HeroSection = () => (
  <HeroContainer>
    <HeroContentContainer>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />

      <HeroContent>
        <H1>Jason Zhen</H1>
        <H2>Full Stack Software Engineer</H2>
        <H3>Recent graduate of UC&nbsp;Davis &amp; App&nbsp;Academy</H3>
        <HeroActions>
          <Button>contact</Button>
          <Button>résumé</Button>
        </HeroActions>
      </HeroContent>
    </HeroContentContainer>
  </HeroContainer>
);

export default HeroSection;
