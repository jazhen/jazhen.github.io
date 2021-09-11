import React from "react";
import * as Styled from "../styles";
import Groovetown from "./projects/Groovetown";
import MamasHelper from "./projects/MamasHelper";
import WaterTheTrees from "./projects/WaterTheTrees";

const Projects = () => (
  <Styled.Section>
    <Styled.Container>
      <Styled.H2 id="projects">Featured Projects</Styled.H2>
      <WaterTheTrees />
      <Groovetown />
      <MamasHelper />
    </Styled.Container>
  </Styled.Section>
);

export default Projects;
