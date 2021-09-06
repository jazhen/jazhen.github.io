import React from "react";
import styled from "styled-components";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

const Socials = () => (
  <Container>
    <Styled.IconLink
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </Styled.IconLink>
    <Styled.IconLink
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </Styled.IconLink>
    <Styled.IconLink
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
    </Styled.IconLink>
  </Container>
);

const Container = styled.div`
  grid-area: socials;
`;

export default Socials;
