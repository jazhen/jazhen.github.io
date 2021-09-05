import React from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";

const Main = () => (
  <Container>
    <Hero />
    <Projects />
    {/* <Experience /> */}
    {/* <About /> */}
    {/* <Contact /> */}
  </Container>
);

const Container = styled.div`
  /* margin: 0 6% 6%; */
  grid-area: main;
`;

export default Main;
