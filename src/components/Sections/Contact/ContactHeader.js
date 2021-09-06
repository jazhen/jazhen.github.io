import React from "react";
import styled from "styled-components";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

const ContactHeader = () => (
  <Container>
    <Header>Let&apos;s Chat</Header>
    <SubHeader>I am currently open for work opportunities.</SubHeader>
    <Link
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon />
      jasonzhen.mail@gmail.com
    </Link>
    <Link
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      jazhen
    </Link>
    <Link
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
      jazhen
    </Link>
  </Container>
);

const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: flex;
    flex-direction: column;
  }
`;

const Link = styled(Styled.TextLink)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const Header = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.secondaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.25rem;
  }
`;

export default ContactHeader;
