import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Buttons/Button";
import H2 from "../../Headers/H2";
import Card from "./Card";
import projects from "./projects.json";

const Projects = () => {
  const [numProjectsLoaded, setNumProjectsLoaded] = useState(3);
  const loadedProjects = projects.slice(0, numProjectsLoaded);
  const haveAllProjectsLoaded = numProjectsLoaded === projects.length;
  const loadMoreProjects = () =>
    setNumProjectsLoaded(Math.min(numProjectsLoaded + 3, projects.length));

  return (
    <>
      <H2 id="projects">Featured Projects</H2>

      <ThreeColumnContainer>
        {loadedProjects.map((props) => {
          // eslint-disable-next-line react/prop-types
          const { title } = props;

          return <Card key={title} {...props} />;
        })}
      </ThreeColumnContainer>

      {/* {haveAllProjectsLoaded ? null : (
        <LoadMoreProjectsButton onClick={loadMoreProjects}>
          view more projects
        </LoadMoreProjectsButton>
      )} */}
    </>
  );
};

const ThreeColumnContainer = styled.div`
  display: grid;
  gap: 2em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
  }
`;

const LoadMoreProjectsButton = styled(Button)`
  margin: 3em 0;
`;

export default Projects;
