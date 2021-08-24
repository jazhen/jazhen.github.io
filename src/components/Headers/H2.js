import styled from "styled-components";

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.563rem;
  font-size: clamp(1.563rem, 1.3435rem + 1.0975vw, 2.441rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: -0.5px;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.color.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.953rem;
    font-size: clamp(1.953rem, 0.8540000000000001rem + 2.198vw, 3.052rem);
  }
`;

export default H2;
