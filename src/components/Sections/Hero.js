import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/heroImage.svg";
import ContainedLinkButton from "../Buttons/ContainedLinkButton";
import OutlineLinkButton from "../Buttons/OutlineLinkButton";
import H1 from "../Headers/H1";
import H3 from "../Headers/H3";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1em, 0.4em + 3vw, 4em);

  @media (min-width: 50rem) {
    flex-direction: row;
  }
`;

const Avatar = styled(HeroImage)`
  display: none;

  @media (min-width: 50rem) {
    display: block;
    min-width: 40%;
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
  // eslint-disable-next-line react/forbid-prop-types
  resume: PropTypes.any.isRequired,
};

export default Hero;
