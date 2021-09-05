import React from "react";
import styled from "styled-components";

const Header = () => (
  <Container>
    <Overline>👋 Hi, I&apos;m Jason Zhen</Overline>
    <Headline>
      I build effective applications across the full&nbsp;stack
    </Headline>
    <ContainedButton href="#projects">👇 View my projects 👇</ContainedButton>
  </Container>
);

const Container = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    text-align: initial;
  }
`;

const Overline = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1.5em;
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.0125em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    font-size: 3.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4rem;
  }
`;

const ContainedButton = styled.button`
  background: transparent;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  padding: 1em 2em;
  margin: 0.25em 0.5em;
  min-width: 4rem;

  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.125rem;
  }
`;

export default Header;
