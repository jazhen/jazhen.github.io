import React from "react";
import styled from "styled-components";
import Image from "./Base/Image";

const Container = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1em;
  }
`;

const Avatar = styled(Image)``;

const UserProfile = () => (
  <div>
    <h2>About Me</h2>
    <Container>
      <p>
        Software engineering is the dream job that child me always wanted but
        never discovered until much later. During my last year of college at UC
        Davis, I took a communication course that involved simulating social
        phenomena using the programmable modeling environment NetLogo.
      </p>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />
    </Container>
  </div>
);

export default UserProfile;
