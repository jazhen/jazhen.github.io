import styled from "styled-components";

const Link = styled.a`
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
    color: var(--color-secondary);
  }
`;

export default Link;
