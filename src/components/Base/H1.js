import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
  font-size: 2.441rem;
  font-size: clamp(
    2.441rem,
    2.0336666666666665rem + 2.036666666666667vw,
    3.052rem
  );
  font-weight: 700;
  letter-spacing: -1.5px;
  margin-bottom: 0.25em;
  color: #6200ee;

  @media (min-width: 50rem) {
    font-size: 3.052rem;
    font-size: clamp(
      3.052rem,
      1.3360000000000003rem + 3.4319999999999995vw,
      4.768rem
    );
  }
`;

export default H1;
