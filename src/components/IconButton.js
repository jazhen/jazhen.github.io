import PropTypes from "prop-types";
import React from "react";
import Link from "./Base/Link";

const IconButton = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  href: "#",
};

export default IconButton;
