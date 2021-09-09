import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";

const data = {
  header: "Computer Science For Kids",
  body: "I visited schools in the Davis and Woodland communities, introducing the fundamentals of computer science to middle school students through programming tools, such as Scratch MIT.",
  overline: "Computer Science Tutor",
  thumbnail:
    "https://user-images.githubusercontent.com/6326660/130694761-5c39c660-6861-463d-b27f-1f0f847fda95.png",
};

const CS4K = () => {
  const { overline, header, body } = data;

  return (
    <Container>
      <Styled.Img src="https://user-images.githubusercontent.com/6326660/132752735-0f79deef-487f-4a60-99ed-2a17a51a5b37.png" />
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
  margin-bottom: 6rem;
`;

const Content = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-auto-flow: column;
    gap: 6em;
  }
`;

const Overline = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 300;
  color: var(--color-black-900);
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export default CS4K;
