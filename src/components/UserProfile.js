import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Container = styled.div`
  display: flex;
  background-color: #242424;
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
        phenomena using the programmable modeling environment NetLogo. I was
        instantly hooked on programming. This class sparked my desire to shift
        my career trajectory from communications to software engineering. I
        attended App Academy to achieve my goal, completing their 16-week
        immersive software engineering program.
      </p>
      <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />
    </Container>
  </div>
);

export default UserProfile;
