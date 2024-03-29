import React from "react";
import styled from "styled-components";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";
import CircleCheck from "./circle-check.inline.svg";

const SubmitMessage = () => (
  <Container>
    <StyledCircleCheck />
    <Header>Message received!</Header>
    <Body>I will get back to you within two business days.</Body>
    <ContainedLink
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.Icon>
        <LinkedInIcon />
      </Styled.Icon>
      Connect on LinkedIn
    </ContainedLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
`;

const StyledCircleCheck = styled(CircleCheck)`
  max-width: 10rem;
  color: #4caf50;
  margin-bottom: 2em;
`;

const Header = styled(Styled.H3)`
  color: var(--color-white-900);
`;

const Body = styled(Styled.BodyText)`
  color: var(--color-white-900);
`;

const ContainedLink = styled(Styled.TextLink)`
  padding: 0.5em 1em;
  margin: 0.25em 0.5em;
  background-color: #2196f3;

  &:hover,
  &:focus {
    color: var(--color-black-900);
    text-decoration: none;
  }
`;

export default SubmitMessage;
