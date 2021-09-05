import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HeroImage from "./hero.inline.svg";

const Hero = () => (
  <Container>
    <Header />
    <Image />
  </Container>
);

const Container = styled.section`
  min-height: 95vh;
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
