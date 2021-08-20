import PropTypes from "prop-types";
import React from "react";

const IconButton = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  href: "#",
};

export default IconButton;
