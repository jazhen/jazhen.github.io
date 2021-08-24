import styled from "styled-components";

const P = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: 0.5px;
  margin: 0;
`;

export default P;
