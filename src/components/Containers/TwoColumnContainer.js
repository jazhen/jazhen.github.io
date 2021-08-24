import styled from "styled-components";

const TwoColumnContainer = styled.div`
  display: grid;
  gap: 3%;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default TwoColumnContainer;
