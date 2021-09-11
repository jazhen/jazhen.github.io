import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import SVG from "./cs4k.inline.svg";

const data = {
  header: "Computer Science For Kids",
  body: "I visited schools in the Davis and Woodland communities, introducing the fundamentals of computer science to middle school students through programming tools, such as Scratch MIT.",
  overline: "Computer Science Tutor",
};

const CS4K = () => {
  const { overline, header, body } = data;

  return (
    <Container>
      <StyledSVG />
      <Content>
        <div>
          <Overline>{overline}</Overline>
          <Styled.H3>{header}</Styled.H3>
        </div>
        <div>
          <Styled.BodyText>{body}</Styled.BodyText>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const StyledSVG = styled(SVG)`
  background-color: #b2dfdb;
`;

const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-auto-flow: column;
    gap: 6em;
  }
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-light);
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export default CS4K;
