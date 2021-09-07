import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import CircleCheck from "./circle-check.inline.svg";

const SubmitMessage = () => (
  <Container>
    <StyledCircleCheck />
    <Header>Thank you!</Header>
    <Body>
      I have received your message and I will try to get back to you within 1
      business day.
    </Body>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
  border-radius: var(--border-radius);
  padding: 2em;
  background-color: var(--color-white-900);
`;

const StyledCircleCheck = styled(CircleCheck)`
  max-width: 50%;
  color: #41c300;
`;

const Header = styled.h2`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2);
  font-weight: 500;
  line-height: 1.2;
  margin: 0.5em 0;
`;

const Body = styled(Styled.BodyText)`
  color: var(--color-black-900);
`;

export default SubmitMessage;
