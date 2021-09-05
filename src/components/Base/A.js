import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  font-size: 1rem;
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

export default A;
