import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import ExternalLinkIcon from "./Icons/ExternalLinkIcon";
import GithubIcon from "./Icons/GithubIcon";
import Image from "./Image";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardBackgroundImage = styled(Image)`
  opacity: 0.3;
  transform: ${(props) => (props.isHovered ? "scale(1.10)" : false)};
`;

const Caption = styled.caption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
`;

const CardCaptionTitle = styled.h1`
  transform: ${(props) =>
    props.isHovered ? "translateY(-0.25em)" : "translateY(0)"};
  transition: ${(props) =>
    props.isHovered
      ? "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
      : "transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)"};
`;

const CardCaptionLogo = styled.div`
  animation: ${(props) => (props.isHovered ? "spin 0.5s linear" : false)};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardCaptionDescription = styled.p`
  transform: ${(props) =>
    props.isHovered ? "translateY(0.25em)" : "translateY(0)"};
  transition: ${(props) =>
    props.isHovered
      ? "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
      : "transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)"};
`;

const CardActions = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  padding: 0.2em 0.8em;
  gap: 0.5em;
  transform-origin: 0 0;
  transform: ${(props) => (props.isHovered ? "scaleY(1)" : "scaleY(0)")};
  transition: ${(props) =>
    props.isHovered
      ? "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
      : "transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)"};
`;

const Card = ({ title, description, githubUrl, websiteUrl, logo, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBackgroundImage src={image} isHovered={isHovered} />

      <Caption>
        <CardCaptionTitle isHovered={isHovered}>{title}</CardCaptionTitle>
        <CardCaptionLogo isHovered={isHovered}>{logo}</CardCaptionLogo>
        <CardCaptionDescription isHovered={isHovered}>
          {description}
        </CardCaptionDescription>
      </Caption>

      <CardActions isHovered={isHovered}>
        <IconButton href={githubUrl}>
          <GithubIcon />
        </IconButton>
        <IconButton href={websiteUrl}>
          <ExternalLinkIcon />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubUrl: PropTypes.string,
  websiteUrl: PropTypes.string,
  logo: PropTypes.node,
  image: PropTypes.string,
};

Card.defaultProps = {
  title: "Title",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                sint perspiciatis deleniti ab possimus ut? Ducimus fugiat hic velit
                necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repellendus sapiente harum soluta excepturi ut temporibus, at
                amet corporis id asperiores.`,
  githubUrl: "#",
  websiteUrl: "#",
  logo: null,
  image: "https://via.placeholder.com/320x180?text=16:9",
};

export default Card;
