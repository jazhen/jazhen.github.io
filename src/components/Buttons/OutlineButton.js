import styled from "styled-components";
import Button from "./Button";

const OutlineButton = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export default OutlineButton;
