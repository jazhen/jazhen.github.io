import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
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

const CardContent = styled.div`
  padding: 1em;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  padding: 0.5em;
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

const Card = ({ title, description, websiteUrl, githubUrl, image }) => (
  <CardContainer>
    <CardButton href={websiteUrl}>
      <Image src={image} />
      {/* <StaticImage src={image} alt="" layout="fullWidth" /> */}
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </CardButton>
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
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                sint perspiciatis deleniti ab possimus ut? Ducimus fugiat hic velit
                necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repellendus sapiente harum soluta excepturi ut temporibus, at
                amet corporis id asperiores.`,
  image: "https://via.placeholder.com/320x180?text=16:9",
  websiteUrl: "#",
  githubUrl: "#",
};

export default Card;
