import React from "react";
import styled from "styled-components";
import H1 from "./Base/H1";
import H2 from "./Base/H2";
import Image from "./Base/Image";
import P from "./Base/P";

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

const Avatar = styled(Image)`
  min-width: 100%;
  border-radius: 50%;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroActions = styled.div``;

const HeroContentContainer = styled.div``;

const HeroSection = () => (
  <HeroContainer>
    <HeroContentContainer>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />

      <HeroContent>
        <H1>Jason Zhen</H1>
        <H2>Full Stack Software Engineer</H2>
        <P>
          Alumini @UC Davis, @App Academy. Currently available for
          opportunities.
        </P>
        <HeroActions>
          <button
            type="button"
            style={{
              padding: "0.5em 1em",
              textTransform: "uppercase",
            }}
          >
            contact
          </button>
          <button
            type="button"
            style={{ padding: "0.5em 1em", textTransform: "uppercase" }}
          >
            résumé
          </button>
        </HeroActions>
      </HeroContent>
    </HeroContentContainer>
  </HeroContainer>
);

export default HeroSection;
