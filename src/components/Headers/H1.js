import styled from "styled-components";

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 2.441rem;
  font-size: clamp(
    2.441rem,
    2.0336666666666665rem + 2.036666666666667vw,
    3.052rem
  );
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -1.5px;
  line-height: 1;
  margin-bottom: 1.5em;
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3.052rem;
    font-size: clamp(
      3.052rem,
      1.3360000000000003rem + 3.4319999999999995vw,
      4.768rem
    );
  }
`;

export default H1;
