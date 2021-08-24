import styled from "styled-components";

const A = styled.a`
  color: ${({ theme }) => theme.color.gray};

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
