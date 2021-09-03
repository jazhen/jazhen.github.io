import React from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/heroImage.svg";
import ContainedLinkButton from "../Buttons/ContainedLinkButton";
import H1 from "../Headers/H1";
import H3 from "../Headers/H3";

const HeroContainer = styled.div`
  min-height: calc(100vh - 78px);
  display: grid;

  @media (min-width: 50rem) {
    text-align: inherit;

    align-items: center;
    grid-auto-flow: row;
    grid-template-columns: 3fr 2fr;
  }
`;

const HeroContent = styled.div`
  display: grid;
`;

const HeroTextContainer = styled.div`
  text-align: center;
  align-self: flex-end;

  @media (min-width: 50rem) {
    text-align: inherit;
  }
`;

const HeroActions = styled.div`
  text-align: center;
  align-self: center;

  @media (min-width: 50rem) {
    text-align: inherit;
  }
`;

const Avatar = styled(HeroImage)`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    max-width: 100%;
  }
`;

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <HeroTextContainer>
        <H3>👋 Hi, I&apos;m Jason Zhen</H3>
        <H1>I build effective applications across the full stack</H1>
      </HeroTextContainer>
      <HeroActions>
        <ContainedLinkButton href="#projects">
          👇 View my projects 👇
        </ContainedLinkButton>
      </HeroActions>
    </HeroContent>
    <Avatar />
  </HeroContainer>
);

export default Hero;
