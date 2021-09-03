import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Link from "./Base/A";
import Img from "./Base/Img";
import Span from "./Base/Span";
import IconButton from "./Buttons/IconButton";
import H5 from "./Headers/H5";
import H6 from "./Headers/H6";
import ExternalLinkIcon from "./Icons/ExternalLinkIcon";
import GithubIcon from "./Icons/GithubIcon";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.paper};
  background-color: ${({ theme }) => theme.color.paper};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const CardButton = styled(Link)`
  display: block;
  position: relative;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.color.primary};
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
    transition: opacity 0.5s ease;
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
  gap: 0.64rem;
  gap: clamp(0.64rem, 0.45714285714285713rem + 0.9142857142857144vw, 0.8rem);
  margin-bottom: 1em;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: clamp(0.64rem, 0.48rem + 0.42666666666666675vw, 0.8rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: clamp(0.64rem, 0.15999999999999992rem + 0.6400000000000001vw, 0.8rem);
  }
`;

const Technology = styled(Span)`
  padding: 0.25em 0.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #2d3748;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8em;
  gap: clamp(0.8em, 0.5714285714285715em + 1.1428571428571426vw, 1em);

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: clamp(0.8em, 0.6000000000000001em + 0.5333333333333332vw, 1em);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: clamp(0.8em, 0.20000000000000018em + 0.7999999999999998vw, 1em);
  }
`;

const Card = ({
  title,
  description,
  websiteURL,
  githubURL,
  image,
  technologies,
}) => (
  <CardContainer>
    <CardButton href={githubURL}>
      <Img src={image} />
    </CardButton>
    <CardContentContainer>
      <CardContent>
        <H5>{title}</H5>
        <H6>{description}</H6>
        <TechnologyContainer>
          {technologies.map((technology) => (
            <Technology key={technology}>{technology}</Technology>
          ))}
        </TechnologyContainer>
      </CardContent>
      <CardActions>
        <IconButton href={githubURL} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </IconButton>
        <IconButton href={websiteURL} target="_blank" rel="noopener noreferrer">
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
  websiteURL: PropTypes.string,
  githubURL: PropTypes.string,
  technologies: PropTypes.array,
};

Card.defaultProps = {
  title: "Title",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  image: "https://via.placeholder.com/320x180?text=16:9",
  websiteURL: "#",
  githubURL: "#",
  technologies: [],
};

export default Card;
