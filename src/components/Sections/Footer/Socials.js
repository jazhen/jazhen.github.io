import React from "react";
import styled from "styled-components";
import IconButton from "../../Buttons/IconButton";
import EmailIcon from "../../Icons/EmailIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

const Container = styled.div`
  grid-area: socials;
  display: flex;
  gap: 1em;
`;

const Socials = () => (
  <Container>
    <IconButton
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
      isOnPrimary
    >
      <GithubIcon />
    </IconButton>
    <IconButton
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
      isOnPrimary
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      isOnPrimary
    >
      <EmailIcon />
    </IconButton>
  </Container>
);

export default Socials;
