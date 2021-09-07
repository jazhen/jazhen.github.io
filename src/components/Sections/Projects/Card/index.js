import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import * as Styled from "../../styles";
import Content from "./Content";

const Card = ({ thumbnail, ...contentProps }) => (
  <Container>
    <Styled.Img src={thumbnail} />
    <Content {...contentProps} />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.paper};
`;

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
