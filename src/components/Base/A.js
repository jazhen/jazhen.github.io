import styled from "styled-components";

const A = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.primary};
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
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default A;
