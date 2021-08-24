import styled from "styled-components";
import Button from "./Button";

const OutlineButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
`;

export default OutlineButton;
