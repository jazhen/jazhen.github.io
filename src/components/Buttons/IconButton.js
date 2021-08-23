import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import A from "../Base/A";

const IconButtonLink = styled(A)`
  display: flex;
`;

const IconButton = ({ href, children }) => (
  <IconButtonLink href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </IconButtonLink>
);

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  href: "#",
};

export default IconButton;
