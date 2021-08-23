import styled from "styled-components";

const A = styled.a`
  color: var(--color-white-secondary);

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
    color: var(--color-primary);
  }
`;

export default A;
