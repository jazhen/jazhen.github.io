import React from "react";
import styled from "styled-components";
import LinkedInIcon from "../icons/linkedin.inline.svg";
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
    <Button
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      Connect on LinkedIn
    </Button>
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
  margin-bottom: 0.5em;
`;

const Header = styled(Styled.H4)`
  color: var(--color-black-900);
`;

const Body = styled(Styled.BodyText)`
  color: var(--color-black-900);
  margin-bottom: 1em;
`;

const Button = styled(Styled.ContainedLink)`
  background-color: #0a66c2;
`;

export default SubmitMessage;
