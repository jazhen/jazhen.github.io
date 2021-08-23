import PropTypes from "prop-types";
import React from "react";
import A from "./Base/A";

const IconButton = ({ href, children }) => (
  <A href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </A>
);

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  href: "#",
};

export default IconButton;
