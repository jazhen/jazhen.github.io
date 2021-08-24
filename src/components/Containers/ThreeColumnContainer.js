import styled from "styled-components";

const ThreeColumnContainer = styled.div`
  display: grid;
  gap: clamp(1em, -0.1428571428571428em + 5.714285714285714vw, 2em);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1em, 0em + 2.666666666666667vw, 2em);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5em, 0em + 2vw, 2em);
  }
`;

export default ThreeColumnContainer;
