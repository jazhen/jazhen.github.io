import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import A from "../Base/A";

const IconButtonLink = styled(A)`
  display: flex;

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme, isOnPrimary }) =>
      isOnPrimary ? theme.color.secondary : theme.color.primary};
  }
`;

const IconButton = ({ children, ...props }) => (
  <IconButtonLink {...props}>{children}</IconButtonLink>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconButton;
