import React from "react";
import Project from "./Project";
import projects from "./projects.json";

const Projects = () => (
  <div>
    {projects.map((project) => (
      <Project {...project} />
    ))}
  </div>
);

export default Projects;
