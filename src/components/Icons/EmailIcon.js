import PropTypes from "prop-types";
import React from "react";

const EmailIcon = ({ strokeWidth, width }) => (
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
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

EmailIcon.propTypes = {
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
};

EmailIcon.defaultProps = {
  strokeWidth: "1.5",
  width: "32",
};

export default EmailIcon;
