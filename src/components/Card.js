import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import H5 from "./Base/H5";
import H6 from "./Base/H6";
import Image from "./Base/Image";
import Link from "./Base/Link";
import IconButton from "./IconButton";
import ExternalLinkIcon from "./Icons/ExternalLinkIcon";
import GithubIcon from "./Icons/GithubIcon";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--border-radius-rounded);
  background-color: var(--color-background-paper);
  box-shadow: var(--elevation-01);
`;

const CardButton = styled(Link)`
  display: block;
  position: relative;

  &:before,
  &:after {
    background-color: var(--color-button-hover);
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }

  &:hover:before,
  &:hover:after,
  &:active:before,
  &:active:after {
    opacity: 0.1;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1em;
`;

const CardContent = styled.div``;

const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;

  gap: 0.64rem;
  gap: clamp(0.64rem, 0.45714285714285713rem + 0.9142857142857144vw, 0.8rem);

  @media (min-width: 37.5rem) {
    gap: clamp(0.64rem, 0.48rem + 0.42666666666666675vw, 0.8rem);
  }

  @media (min-width: 75rem) {
    gap: clamp(0.64rem, 0.15999999999999992rem + 0.6400000000000001vw, 0.8rem);
  }
`;

const Technology = styled.span`
  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  font-size: 0.8rem;
  font-size: clamp(0.8rem, 0.5714285714285715rem + 1.1428571428571426vw, 1rem);
  font-weight: 400;

  padding: 0.25em 0.5em;
  border-radius: var(--border-radius-rounded);

  background-color: #2d3748;
  color: var(--color-secondary);

  @media (min-width: 37.5rem) {
    font-size: clamp(
      0.8rem,
      0.6000000000000001rem + 0.5333333333333332vw,
      1rem
    );
  }

  @media (min-width: 75rem) {
    font-size: clamp(
      0.8rem,
      0.20000000000000018rem + 0.7999999999999998vw,
      1rem
    );
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8em;
  gap: clamp(0.8em, 0.5714285714285715em + 1.1428571428571426vw, 1em);

  @media (min-width: 37.5rem) {
    gap: clamp(0.8em, 0.6000000000000001em + 0.5333333333333332vw, 1em);
  }

  @media (min-width: 75rem) {
    gap: clamp(0.8em, 0.20000000000000018em + 0.7999999999999998vw, 1em);
  }
`;

const Card = ({ title, description, websiteUrl, githubUrl, image }) => (
  <CardContainer>
    <CardButton href={websiteUrl}>
      <Image src={image} />
    </CardButton>
    <CardContentContainer>
      <CardContent>
        <H5>{title}</H5>
        <H6>{description}</H6>
        <TechnologyContainer>
          <Technology>React</Technology>
          <Technology>Redux</Technology>
          <Technology>Node.js</Technology>
          <Technology>Ruby on Rails</Technology>
          <Technology>Docker</Technology>
        </TechnologyContainer>
      </CardContent>

      <CardActions>
        <IconButton href={githubUrl}>
          <GithubIcon />
        </IconButton>
        <IconButton href={websiteUrl}>
          <ExternalLinkIcon />
        </IconButton>
      </CardActions>
    </CardContentContainer>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  websiteUrl: PropTypes.string,
  githubUrl: PropTypes.string,
};

Card.defaultProps = {
  title: "Title",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  image: "https://via.placeholder.com/320x180?text=16:9",
  websiteUrl: "#",
  githubUrl: "#",
};

export default Card;
