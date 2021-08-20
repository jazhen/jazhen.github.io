import PropTypes from "prop-types";
import React from "react";

const ExternalLinkIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size === "medium" ? 32 : 48}
    height={size === "medium" ? 32 : 48}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5" />
  </svg>
);

ExternalLinkIcon.propTypes = {
  size: PropTypes.string,
};

ExternalLinkIcon.defaultProps = {
  size: "medium",
};

export default ExternalLinkIcon;
