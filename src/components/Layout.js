import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }

  body {
    margin: 0 auto;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.color.background};
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
