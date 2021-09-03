import styled from "styled-components";

const A = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.secondaryText};
  align-self: center;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: ${({ theme, onPrimary }) =>
      onPrimary ? theme.color.secondary : theme.color.primary};
  }
`;

export default A;
