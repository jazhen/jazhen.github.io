import styled from "styled-components";

const ThreeColumnContainer = styled.div`
  display: grid;
  gap: 3%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ThreeColumnContainer;
