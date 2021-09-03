import styled from "styled-components";

const Span = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.8rem;
  font-size: clamp(0.8rem, 0.5714285714285715rem + 1.1428571428571426vw, 1rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.secondaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: clamp(
      0.8rem,
      0.6000000000000001rem + 0.5333333333333332vw,
      1rem
    );
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: clamp(
      0.8rem,
      0.20000000000000018rem + 0.7999999999999998vw,
      1rem
    );
  }
`;

export default Span;
