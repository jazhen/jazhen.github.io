import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import A from "../Base/A";

const IconButtonLink = styled(A)`
  display: flex;
`;

const IconButton = ({ href, onPrimary, children }) => (
  <IconButtonLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onPrimary={onPrimary}
  >
    {children}
  </IconButtonLink>
);

IconButton.propTypes = {
  href: PropTypes.string,
  onPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  href: "#",
  onPrimary: false,
};

export default IconButton;
