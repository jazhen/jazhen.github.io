import styled from "styled-components";

const H3 = styled.h3`
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-size: clamp(1rem, 0.8333333333333334rem + 0.8333333333333334vw, 1.25rem);
  font-weight: 400;
  letter-spacing: 0px;
  margin-bottom: 2em;

  @media (min-width: 50rem) {
    font-size: 1.25rem;
    font-size: clamp(
      1.25rem,
      0.5469999999999999rem + 1.4060000000000001vw,
      1.953rem
    );
  }
`;

export default H3;
