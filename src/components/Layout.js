import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #6200ee;
    --color-on-primary: #fff;
    --color-secondary: #03dac6;
    --color-white-primary: rgba(255, 255, 255, 1);
    --color-white-secondary: rgba(255, 255, 255, 0.87);
    --color-button-active: #fff;
    --color-button-hover: rgba(255, 255, 255, 0.8);
    --color-button-selected: rgba(255, 255, 255, 0.16);
    --color-background-default: #121212;
    --color-background-paper: #303030;
    --elevation-01: 0px 2px 1px -1px rgba(0,0,0,0.2),
                    0px 1px 1px 0px rgba(0,0,0,0.14),
                    0px 1px 3px 0px rgba(0,0,0,0.12);
    --border-radius-rounded: 4px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scrollbar-width: thin;
  }

  body {
    margin: 0 auto;
    line-height: 1.3;
    background-color: var(--color-background-default);
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
