import styled from "styled-components";

const A = styled.a`
  display: flex;
  align-items: center;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: var(--color-primary);
  }
`;

export default A;
