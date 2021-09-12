import React from "react";
import * as Styled from "../styles";
import Project from "./Project";
import projects from "./projects";

const Projects = () => (
  <Styled.Section>
    <Styled.MaxWidthContainer>
      <Styled.H2 id="projects">Featured Projects</Styled.H2>
      {projects.map((project) => {
        const { header } = project;

        return <Project key={header} {...project} />;
      })}
    </Styled.MaxWidthContainer>
  </Styled.Section>
);

export default Projects;
