import PropTypes from "prop-types";
import React from "react";

const GithubIcon = ({ strokeWidth, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    width={width}
    height="auto"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

GithubIcon.propTypes = {
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
};

GithubIcon.defaultProps = {
  strokeWidth: "1.5",
  width: "30",
};

export default GithubIcon;