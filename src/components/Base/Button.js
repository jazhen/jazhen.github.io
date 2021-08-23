import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1.25em;
  border-radius: var(--border-radius-rounded);
  border: 2px solid #6200ee;

  font-size: 1rem;
  font-size: clamp(1rem, 0.975rem + 0.125vw, 1.125rem);
  letter-spacing: 0.0625em;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default Button;
