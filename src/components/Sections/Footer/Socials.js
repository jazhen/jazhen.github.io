import React from "react";
import styled from "styled-components";
import EmailIcon from "../../Icons/EmailIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

const Socials = () => (
  <Container>
    <IconLink
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </IconLink>
    <IconLink
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </IconLink>
    <IconLink
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
    </IconLink>
  </Container>
);

const Container = styled.div`
  grid-area: socials;
`;

const IconLink = styled.a`
  min-width: 3rem;
  display: inline-flex;
  padding: 0.5em;
  margin: 0.25em;
  color: ${({ theme }) => theme.color.secondaryText};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default Socials;
