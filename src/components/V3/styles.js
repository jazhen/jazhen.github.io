import styled from "styled-components";

export const BodyText = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 400;
  max-width: 60ch;
  color: var(--color-black-900);
  margin-bottom: 1em;
`;

export const H3 = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-black-900);
  margin-bottom: 0.5em;
`;

export const TextLink = styled.a`
  min-width: 3rem;
  min-height: 3rem;
  border-radius: var(--border-radius);
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: 500;
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

  & + a {
    margin-left: 1em;
  }
`;

export const Icon = styled.span`
  width: 1.25rem;
  height: auto;
  line-height: 0;
`;
