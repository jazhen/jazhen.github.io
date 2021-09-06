import React, { useState } from "react";
import styled from "styled-components";
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
    <Styled.Section>
      <Styled.SectionTitle id="projects">Featured Projects</Styled.SectionTitle>

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
    </Styled.Section>
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
  }
`;

const LoadMoreProjectsButton = styled(Styled.TextButton)`
  font-size: var(--font-size-0);
  margin-top: 4em;
`;

export default Projects;
