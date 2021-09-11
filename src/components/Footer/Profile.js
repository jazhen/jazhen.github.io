import React from "react";
import styled from "styled-components";
import EmailIcon from "../icons/email.inline.svg";
import GithubIcon from "../icons/github.inline.svg";
import LinkedInIcon from "../icons/linkedin.inline.svg";
import * as Styled from "../styles";

const Profile = () => (
  <Styled.UnorderedList>
    <li>
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
    </li>
    <li>
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
    </li>
    <li>
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
    </li>
  </Styled.UnorderedList>
);

const Link = styled(Styled.TextLink)`
  color: var(--color-white-900);
  text-transform: lowercase;
  letter-spacing: 0;
`;

export default Profile;
