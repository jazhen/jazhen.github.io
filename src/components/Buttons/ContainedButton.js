import styled from "styled-components";
import Button from "./Button";

const ContainedButton = styled(Button)`
  background: ${({ theme }) => theme.color.primary};
  color: black;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export default ContainedButton;
