import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import CS4K from "./CS4K";

const Experience = () => (
  <Styled.Section>
    <Styled.Container>
      <H1 id="experience">Relevant Experience</H1>
      <CS4K />
    </Styled.Container>
  </Styled.Section>
);

const H1 = styled.h1`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

export default Experience;
