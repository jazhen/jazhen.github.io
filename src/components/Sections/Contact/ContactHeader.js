import React from "react";
import styled from "styled-components";
import H4 from "../../Headers/H4";
import H5 from "../../Headers/H5";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

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
    <Styled.TextLink
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
      jasonzhen.mail@gmail.com
    </Styled.TextLink>
    <Styled.TextLink
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      jazhen
    </Styled.TextLink>
    <Styled.TextLink
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
      jazhen
    </Styled.TextLink>
  </Container>
);

export default ContactHeader;
