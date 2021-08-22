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
  padding: clamp(1em, 0.4em + 3vw, 4em);
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  max-width: 60%;

  @media (min-width: 50rem) {
    max-width: min(40%, 25em);
  }
`;

const HeroContent = styled.div`
  text-align: center;

  @media (min-width: 50rem) {
    text-align: inherit;
  }
`;

const HeroH1 = styled(H1)`
  font-size: clamp(2.827rem, 1.7937999999999998rem + 5.166vw, 7.993rem);
  line-height: 1.167;
  color: #6200ee;
`;

const HeroH2 = styled(H2)`
  font-size: clamp(1.999rem, 1.5992000000000002rem + 1.999vw, 3.998rem);
  line-height: 1.2;
  opacity: 0.87;
  margin-bottom: 0.25em;

  @media (min-width: 50rem) {
    margin-bottom: 0.125em;
  }
`;

const HeroH3 = styled(H3)`
  font-size: clamp(1rem, 0.8002rem + 0.9990000000000001vw, 1.999rem);
  opacity: 0.87;
  margin-bottom: 1em;
`;

const HeroActions = styled.div``;

const Button = styled.button`
  padding: 0.5em 1.25em;
  text-transform: uppercase;

  background: transparent;
  border-radius: 4px;
  border: 2px solid #6200ee;
  color: #6200ee;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  letter-spacing: 0.02857em;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:not(:first-child) {
    margin-left: 1em;
  }
`;

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1em, 0.4em + 3vw, 4em);

  @media (min-width: 50rem) {
    flex-direction: row;
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <HeroContentContainer>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />

      <HeroContent>
        <HeroH1>Jason Zhen</HeroH1>
        <HeroH2>Full Stack Software Engineer</HeroH2>
        <HeroH3>
          Recent graduate of @UC&nbsp;Davis, @App&nbsp;Academy. Currently
          available for opportunities.
        </HeroH3>
        <HeroActions>
          <Button>contact</Button>
          <Button>résumé</Button>
        </HeroActions>
      </HeroContent>
    </HeroContentContainer>
  </HeroContainer>
);

export default HeroSection;
