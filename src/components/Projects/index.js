import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import Groovetown from "./projects/Groovetown";
import MamasHelper from "./projects/MamasHelper";
import WaterTheTrees from "./projects/WaterTheTrees";

const Projects = () => (
  <Styled.Section>
    <Styled.Container>
      <H1 id="projects">Featured Projects</H1>
      <WaterTheTrees />
      <Groovetown />
      <MamasHelper />
    </Styled.Container>
  </Styled.Section>
);

const H1 = styled.h1`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

export default Projects;
