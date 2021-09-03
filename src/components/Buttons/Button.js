import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0.5em 1.25em;
  font-size: 1rem;
  font-size: clamp(1rem, 0.975rem + 0.125vw, 1.125rem);
  letter-spacing: 0.125em;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: ${({ theme, onPrimary }) =>
      onPrimary ? theme.color.secondary : theme.color.primary};
  }
`;

export default Button;
