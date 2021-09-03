import styled from "styled-components";
import Button from "./Button";

const ContainedButton = styled(Button)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:active,
  &:focus {
    color: black;
  }
`;

export default ContainedButton;
