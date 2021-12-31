import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import useHover from "./useHover";

const Project = ({ header, body, overline, technologies, SVG }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Container ref={hoverRef} href="#">
      <SVG
        style={{
          transform: isHovered && "scale(1.03)",
          transition: "all 0.3s ease-in-out",
        }}
      />
      <Content>
        <div>
          <Overline>{overline}</Overline>
          <Styled.H3>{header}</Styled.H3>
        </div>
        <div>
          <Technology>
            {technologies.map((technology) => (
              <Styled.BodyTextSmall key={technology}>
                {technology}
              </Styled.BodyTextSmall>
            ))}
          </Technology>
          <Styled.BodyText>{body}</Styled.BodyText>
          <CallToAction isHovered={isHovered}>View Project</CallToAction>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2em;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 6em;
  }
`;

const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
  }
`;

const Technology = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5em;
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-light);
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const CallToActionHovered = `
  cursor: pointer;
  text-decoration: underline 2px black;
  text-underline-offset: 0.5em;
`;

const CallToAction = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.125em;
  text-transform: uppercase;
  color: var(--color-black-900);
  ${({ isHovered }) => isHovered && { CallToActionHovered }}
`;

export default Project;
