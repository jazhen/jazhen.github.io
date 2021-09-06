import React from "react";
import styled from "styled-components";
import EmailIcon from "../../Icons/EmailIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";
import * as Styled from "../styles";

const Container = styled.div`
  grid-area: socials;
  display: flex;
  gap: 1em;
`;

const Link = styled(Styled.TextLink)`
  display: flex;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const Socials = () => (
  <Container>
    <Link
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </Link>
    <Link
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </Link>
    <Link
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
    </Link>
  </Container>
);

export default Socials;
