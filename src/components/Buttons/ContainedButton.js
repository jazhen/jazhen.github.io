import styled from "styled-components";
import Button from "./Button";

const ContainedButton = styled(Button)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
`;

export default ContainedButton;
