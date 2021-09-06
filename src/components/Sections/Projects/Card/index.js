import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Content from "./Content";

const Card = ({ thumbnail, ...contentProps }) => (
  <Container>
    <Thumbnail src={thumbnail} />
    <Content {...contentProps} />
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.paper};
`;

const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  contentProps: PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    websiteURL: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
