import PropTypes from "prop-types";
import React from "react";

const ExternalLinkIcon = ({ strokeWidth, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    width={width}
    height="auto"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5" />
  </svg>
);

ExternalLinkIcon.propTypes = {
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
};

ExternalLinkIcon.defaultProps = {
  strokeWidth: "1.5",
  width: "30",
};

export default ExternalLinkIcon;
