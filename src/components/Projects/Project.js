import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import useHover from "./useHover";

const Project = ({
  header,
  body,
  overline,
  github,
  technologies,
  SVG,
  backgroundColor,
}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Container ref={hoverRef} href="#contact">
      <SVG
        style={{
          backgroundColor,
          transform: isHovered ? "scale(1.03)" : false,
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
          <Links>
            <Styled.TextLink
              isHovered={isHovered}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Styled.TextLink>
          </Links>
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

const Links = styled.div`
  display: flex;
  gap: 2em;
`;

export default Project;
