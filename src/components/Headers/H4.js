import styled from "styled-components";

const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.563rem;
  font-size: clamp(
    1.563rem,
    1.117285714285714rem + 2.228571428571429vw,
    1.953rem
  );
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: 0.25px;
  margin: clamp(2em, 1.75em + 1.25vw, 3em) 0
    clamp(1em, 0.875em + 0.625vw, 1.5em);
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: clamp(
      1.563rem,
      1.1729999999999998rem + 1.0400000000000005vw,
      1.953rem
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: clamp(
      1.563rem,
      0.39299999999999957rem + 1.5600000000000005vw,
      1.953rem
    );
  }
`;

export default H4;
