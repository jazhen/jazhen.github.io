import styled from "styled-components";

const H6 = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-size: clamp(1rem, 0.7142857142857143rem + 1.4285714285714286vw, 1.25rem);
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: 0.15px;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: clamp(1rem, 0.75rem + 0.6666666666666667vw, 1.25rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: clamp(1rem, 0.25rem + 1vw, 1.25rem);
  }
`;

export default H6;
