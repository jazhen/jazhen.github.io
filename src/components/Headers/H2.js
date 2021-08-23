import styled from "styled-components";

const H2 = styled.h2`
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
  font-size: 1.563rem;
  font-size: clamp(1.563rem, 1.3435rem + 1.0975vw, 2.441rem);
  font-weight: 400;
  letter-spacing: -0.5px;
  margin-bottom: 0.5em;
  color: var(--color-white-primary);

  @media (min-width: 50rem) {
    font-size: 1.953rem;
    font-size: clamp(1.953rem, 0.8540000000000001rem + 2.198vw, 3.052rem);
  }
`;

export default H2;
