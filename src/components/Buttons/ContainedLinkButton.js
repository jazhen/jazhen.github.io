import PropTypes from "prop-types";
import React from "react";
import A from "../Base/A";
import ContainedButton from "./ContainedButton";

const ContainedLinkButton = ({ children, ...props }) => (
  <A {...props}>
    <ContainedButton>{children}</ContainedButton>
  </A>
);

ContainedLinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainedLinkButton;
