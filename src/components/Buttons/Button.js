import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1.25em;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.color.primary};
  font-size: 1rem;
  font-size: clamp(1rem, 0.975rem + 0.125vw, 1.125rem);
  letter-spacing: 0.0625em;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default Button;
