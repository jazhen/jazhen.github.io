import styled from "styled-components";

export const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.secondaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;

export const IconLink = styled.a`
  min-width: 3rem;
  display: inline-flex;
  padding: 0.5em;
  margin: 0.25em;
  color: ${({ theme }) => theme.color.secondaryText};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const TextButton = styled.button`
  min-width: 3rem;
  padding: 0.625em 1.25em;
  margin: 0.25em 0.5em;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
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
    font-size: 0.875rem;
  }
`;

export const TextLink = styled.a`
  min-width: 3rem;
  min-height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondaryText};
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 0.875rem;
  }
`;

export const ContainedLink = styled(TextLink)`
  padding: 0.75em 1.5em;
  margin: 0.25em 0.5em;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;
