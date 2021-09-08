import React from "react";
import styled from "styled-components";
import Groovetown from "./projects/Groovetown";
import MamasHelper from "./projects/MamasHelper";
import WaterTheTrees from "./projects/WaterTheTrees";

const Projects = () => (
  <Container>
    <H1>Featured Projects</H1>
    <WaterTheTrees />
    <Groovetown />
    <MamasHelper />
  </Container>
);

const Container = styled.section`
  background-color: #eee;
  padding: 2em;
`;

const H1 = styled.h1`
  max-width: 1140px;
  margin: auto;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

export default Projects;
