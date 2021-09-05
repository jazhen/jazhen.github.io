import React from "react";
import styled from "styled-components";
import ChevronDown from "./chevron-down.inline.svg";

const Header = () => (
  <Container>
    <Overline>👋 Hi, I&apos;m Jason Zhen</Overline>
    <Headline>
      I build effective applications across the full&nbsp;stack
    </Headline>
    <ContainedButton href="#projects">
      View my projects
      <ChevronDown />
    </ContainedButton>
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

const ContainedButton = styled.a`
  min-width: 3rem;
  padding: 1em 2em;
  margin: 0.25em 0.5em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondaryText};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  gap: 0.5em;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.125rem;
  }
`;

export default Header;
