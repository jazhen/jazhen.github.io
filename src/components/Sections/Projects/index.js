import React, { useState } from "react";
import styled from "styled-components";
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
          const { header } = props;

          return <Card key={header} {...props} />;
        })}
      </ThreeColumnContainer>

      {haveAllProjectsLoaded ? null : (
        <LoadMoreProjectsButton onClick={loadMoreProjects}>
          view more projects
        </LoadMoreProjectsButton>
      )}
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

const TextButton = styled.button`
  min-width: 3rem;
  padding: 0.625em 1.25em;
  margin: 0.25em 0.5em;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  display: inline-flex;
  gap: 0.5em;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;

const LoadMoreProjectsButton = styled(TextButton)`
  margin: 3em 0;
`;

export default Projects;
