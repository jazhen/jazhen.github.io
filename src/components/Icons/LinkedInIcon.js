import PropTypes from "prop-types";
import React from "react";

const LinkedInIcon = ({ strokeWidth, width }) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
  </svg>
);

LinkedInIcon.propTypes = {
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
};

LinkedInIcon.defaultProps = {
  strokeWidth: "1.5",
  width: "32",
};

export default LinkedInIcon;
