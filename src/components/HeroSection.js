import React from "react";
import styled from "styled-components";
import H2 from "./Base/H2";
import H4 from "./Base/H4";
import Image from "./Base/Image";

const HeroContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Avatar = styled(Image)`
  ${"" /* min-width: clamp(1rem, 0.5rem + 6.6667vw, 3rem); */}
  max-width: 400px;
  border-radius: 50%;
`;

const HeroContent = styled.div`
  text-align: center;
  color: var(--color-white);
`;

const HeroSection = () => (
  <HeroContainer>
    <Avatar src="https://jazhen.github.io/images/Jason_Zhen.png" />

    <HeroContent>
      <H2>Jason Zhen</H2>
      <H4>Full Stack Software Engineer</H4>
    </HeroContent>
  </HeroContainer>
);

export default HeroSection;
