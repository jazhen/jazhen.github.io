import styled from "styled-components";

export const TextLink = styled.a`
  min-width: 3rem;
  padding: 0.625em 1.25em;
  margin: 0.25em 0.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondaryText};
  display: inline-flex;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;
