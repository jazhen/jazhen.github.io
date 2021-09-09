import React from "react";
import styled from "styled-components";
import Groovetown from "./projects/Groovetown";
import MamasHelper from "./projects/MamasHelper";
import WaterTheTrees from "./projects/WaterTheTrees";

const Projects = () => (
  <Section>
    <Container>
      <H1 id="projects">Featured Projects</H1>
      <WaterTheTrees />
      <Groovetown />
      <MamasHelper />
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 4em 2em;
  background-color: var(--color-white-900);

  @media (min-width: 900px) {
    padding: 4em;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const H1 = styled.h1`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

export default Projects;
