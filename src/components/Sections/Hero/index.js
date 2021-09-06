import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import * as Styled from "../styles";
import Header from "./Header";
import HeroImage from "./hero.inline.svg";

const Hero = () => (
  <Container>
    <Nav />
    <HeroContainer>
      <Header />
      <Image />
    </HeroContainer>
  </Container>
);

const Container = styled(Styled.Section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroContainer = styled.div`
  margin: auto;
  display: grid;
  place-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-template-columns: 3fr 2fr;
    place-items: center start;
  }
`;

const Image = styled(HeroImage)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    display: block;
  }
`;

export default Hero;
