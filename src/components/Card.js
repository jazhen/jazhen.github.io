import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import H4 from "./Base/H4";
import H6 from "./Base/H6";
import Image from "./Base/Image";
import Link from "./Base/Link";
import IconButton from "./IconButton";
import ExternalLinkIcon from "./Icons/ExternalLinkIcon";
import GithubIcon from "./Icons/GithubIcon";

const CardContainer = styled.div`
  background-color: var(--color-background-paper);
  box-shadow: var(--elevation-01);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    opacity: 0.05;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const CardContent = styled.div`
  padding: clamp(0.5em, 0.25em + 1.25vw, 1em);
`;

const TechnologyContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Technology = styled.span`
  background-color: #2d3748;
  color: var(--color-secondary);
  padding: 0.25em 0.5em;
  border-radius: 4px;

  font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  padding: clamp(0.5em, 0.25em + 1.25vw, 1em);
`;

const Card = ({ title, description, websiteUrl, githubUrl, image }) => (
  <CardContainer>
    <CardButton href={websiteUrl}>
      <Image src={image} />
      <CardContent>
        <H4>{title}</H4>
        <H6>{description}</H6>
      </CardContent>
    </CardButton>
    <TechnologyContainer>
      <Technology>React</Technology>
      <Technology>React</Technology>
      <Technology>React</Technology>
    </TechnologyContainer>
    <CardActions>
      <IconButton href={githubUrl}>
        <GithubIcon />
      </IconButton>
      <IconButton href={websiteUrl}>
        <ExternalLinkIcon />
      </IconButton>
    </CardActions>
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
