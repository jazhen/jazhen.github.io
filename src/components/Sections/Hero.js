import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/heroImage.svg";
import ContainedLinkButton from "../Buttons/ContainedLinkButton";
import OutlineLinkButton from "../Buttons/OutlineLinkButton";
import H1 from "../Headers/H1";
import H3 from "../Headers/H3";

const HeroContainer = styled.div`
  @media (min-width: 50rem) {
    display: grid;
    align-items: center;
    grid-auto-flow: row;
    grid-template-columns: 3fr 2fr;
  }
`;

const Avatar = styled(HeroImage)`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    max-width: 100%;
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

const Hero = ({ resume }) => (
  <HeroContainer>
    <HeroContent>
      <H3>👋 Hi, I&apos;m Jason Zhen</H3>
      <H1>I build effective applications across the full stack</H1>
      <HeroActions>
        <OutlineLinkButton
          href="mailto:jasonzhen.mail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </OutlineLinkButton>
        <ContainedLinkButton
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          résumé
        </ContainedLinkButton>
      </HeroActions>
    </HeroContent>
    <Avatar />
  </HeroContainer>
);

Hero.propTypes = {
  resume: PropTypes.string.isRequired,
};

export default Hero;
