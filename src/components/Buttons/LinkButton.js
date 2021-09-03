import PropTypes from "prop-types";
import React from "react";
import A from "../Base/A";
import Button from "./Button";

const LinkButton = ({ children, ...props }) => (
  <A {...props}>
    <Button>{children}</Button>
  </A>
);

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkButton;
