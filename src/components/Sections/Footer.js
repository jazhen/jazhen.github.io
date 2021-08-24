import React from "react";
import styled from "styled-components";
import IconButton from "../Buttons/IconButton";
import H6 from "../Headers/H6";
import EmailIcon from "../Icons/EmailIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const FooterCopy = styled(H6)`
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <IconsContainer>
      <IconButton href="https://github.com/jazhen">
        <GithubIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/jazhen/">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="mailto:jasonzhen.mail@gmail.com">
        <EmailIcon />
      </IconButton>
    </IconsContainer>
    <FooterCopy>© 2021 Jason Zhen</FooterCopy>
  </FooterContainer>
);

export default Footer;
