import styled from "styled-components";

export const A = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondaryText};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;
