import React, { useState } from "react";
import styled from "styled-components";
import H2 from "../../Headers/H2";
import * as Styled from "../styles";
import Card from "./Card";
import ChevronDown from "./chevron-down.inline.svg";
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
          const { header } = props;

          return <Card key={header} {...props} />;
        })}
      </ThreeColumnContainer>

      {haveAllProjectsLoaded ? null : (
        <LoadMoreProjectsButton onClick={loadMoreProjects}>
          view more projects <ChevronDown />
        </LoadMoreProjectsButton>
      )}
    </>
  );
};

const ThreeColumnContainer = styled.section`
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

const LoadMoreProjectsButton = styled(Styled.TextButton)`
  margin: 3em 0;
`;

export default Projects;
