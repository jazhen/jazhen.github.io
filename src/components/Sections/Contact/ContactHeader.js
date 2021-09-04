import React from "react";
import styled from "styled-components";
import IconButton from "../../Buttons/IconButton";
import H4 from "../../Headers/H4";
import H5 from "../../Headers/H5";
import EmailIcon from "../../Icons/EmailIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
  background-color: purple;
`;

const ContactHeader = () => (
  <Container>
    <H4>Let&apos;s Chat</H4>
    <H5>
      Fill out the form and I will get back to you within one business day.
    </H5>
    <IconButton
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
      jasonzhen.mail@gmail.com
    </IconButton>
    <IconButton
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      jazhen
    </IconButton>
    <IconButton
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
      jazhen
    </IconButton>
  </Container>
);

export default ContactHeader;
