import React from "react";
import styled from "styled-components";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

const Profile = () => (
  <Container>
    <Link
      href="mailto:jasonzhen.mail@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.Icon>
        <EmailIcon />
      </Styled.Icon>
      jasonzhen.mail@gmail.com
    </Link>
    <Link
      href="https://www.linkedin.com/in/jazhen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.Icon>
        <LinkedInIcon />
      </Styled.Icon>
      jazhen
    </Link>
    <Link
      href="https://github.com/jazhen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.Icon>
        <GithubIcon />
      </Styled.Icon>
      jazhen
    </Link>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled(Styled.TextLink)`
  color: var(--color-white-900);
`;

export default Profile;
