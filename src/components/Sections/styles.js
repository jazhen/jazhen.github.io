import styled from "styled-components";

export const BodyText = styled.p`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: 400;
  color: var(--color-white-800);
`;

export const IconLink = styled.a`
  min-width: 3rem;
  min-height: 3rem;
  display: inline-flex;
  padding: 0.5em;
  margin: 0.25em;
  color: var(--color-white-800);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const TextButton = styled.button`
  min-width: 3rem;
  padding: 0.75em 1.5em;
  margin: 0.25em 0.5em;
  background: transparent;
  border: none;
  border-radius: var(--border-radius);
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: var(--color-white-800);
  display: inline-flex;
  gap: 0.5em;
  place-content: center;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }
`;

export const TextLink = styled.a`
  min-width: 3rem;
  min-height: 3rem;
  width: max-content;
  border-radius: var(--border-radius);
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-white-800);
  display: inline-flex;
  place-items: center;
  gap: 0.5em;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }
`;

export const ContainedLink = styled(TextLink)`
  padding: 0.75em 1.5em;
  margin: 0.25em 0.5em;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover,
  &:focus {
    color: var(--color-white-800);
  }
`;

export const Section = styled.section`
  margin-bottom: 16em;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-3);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-white-900);
  margin-bottom: 2em;
`;
