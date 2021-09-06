import React from "react";
import styled from "styled-components";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

const ContactHeader = () => (
  <div>
    <Header>Let&apos;s Chat</Header>
    <SubHeader>I am currently open for work opportunities.</SubHeader>
    <LinksContainer>
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
    </LinksContainer>
  </div>
);

const LinksContainer = styled.div`
  display: flex;
  gap: 1em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    flex-direction: column;
  }
`;

const Header = styled.h2`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2);
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color.primaryText};
`;

const SubHeader = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-1);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.secondaryText};
`;

const Link = styled(Styled.TextLink)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default ContactHeader;
