import React from "react";
import styled from "styled-components";
import ChevronsDown from "../icons/chevrons-down.inline.svg";
import * as Styled from "../styles";
import SVG from "./hero.inline.svg";

const Hero = () => (
  <Styled.Section>
    <Styled.MaxWidthContainer>
      <TwoColumnContainer>
        <div>
          <Styled.BodyTextLarge>
            👋 Hi, I&apos;m Jason Zhen
          </Styled.BodyTextLarge>
          <Headline>
            Passionate about developing user-centered web experiences
          </Headline>
          <Styled.TextLink href="#projects">
            View my projects
            <Styled.Icon>
              <ChevronsDown />
            </Styled.Icon>
          </Styled.TextLink>
        </div>
        <SVG />
      </TwoColumnContainer>
    </Styled.MaxWidthContainer>
  </Styled.Section>
);

const TwoColumnContainer = styled(Styled.TwoColumnContainer)`
  display: grid;
  place-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    text-align: initial;
  }
`;

const Headline = styled.h1`
  font-family:var(--font-family-primary)};
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-medium);
  letter-spacing: -0.0125em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: var(--color-black-900);
`;

export default Hero;
