import styled from "styled-components";

const TwoColumnContainer = styled.div`
  display: grid;
  gap: clamp(1em, -0.1428571428571428em + 5.714285714285714vw, 2em);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1em, 0em + 2.666666666666667vw, 2em);
  }
`;

export default TwoColumnContainer;
