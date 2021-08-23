import styled from "styled-components";

const H5 = styled.h5`
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  font-size: 1.25rem;
  font-size: clamp(
    1.25rem,
    0.8922857142857143rem + 1.7885714285714283vw,
    1.563rem
  );
  font-weight: 400;
  letter-spacing: 0px;
  margin-bottom: 0.5em;

  @media (min-width: 37.5rem) {
    font-size: clamp(1.25rem, 0.937rem + 0.8346666666666666vw, 1.563rem);
  }

  @media (min-width: 75rem) {
    font-size: clamp(
      1.25rem,
      0.31100000000000017rem + 1.2519999999999998vw,
      1.563rem
    );
  }
`;

export default H5;
