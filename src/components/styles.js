import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--color-white-900);
  padding-inline: var(--padding-inline-section);
  padding-block: var(--padding-block-section);
`;

export const MaxWidthContainer = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
`;

export const TwoColumnContainer = styled.div`
  display: grid;
  gap: 4em;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-auto-flow: column;
  }
`;

export const BodyText = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-regular);
  max-width: 60ch;
  color: var(--color-black-900);
  margin-bottom: 1em;
`;

export const BodyTextLarge = styled(BodyText)`
  font-size: var(--font-size-1);
`;

export const H2 = styled.h2`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 2em;
`;

export const H3 = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 0.5em;
`;

export const TextLink = styled.a`
  min-width: 3rem;
  min-height: 3rem;
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.125em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-black-900);
  display: inline-flex;
  place-items: center;
  gap: 0.5em;

  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }
`;

export const TextButton = styled.button`
  min-width: 3rem;
  background: transparent;
  border: none;
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: var(--color-white-900);
  display: inline-flex;
  gap: 0.5em;
  place-content: center;

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--color-white-800);
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccccc;
    color: #888888;
  }
`;

export const Icon = styled.span`
  width: 1.25rem;
  height: auto;
  line-height: 0;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
`;
