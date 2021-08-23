import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: rgba(255, 255, 255, 0.87);
    --color-secondary: rgba(255, 255, 255, 0.7);
    --color-button-active: #fff;
    --color-button-hover: rgba(255, 255, 255, 0.8);
    --color-button-selected: rgba(255, 255, 255, 0.16);
    --color-background-default: #121212;
    --color-background-paper: #303030;
    --color-white: #fff;
    --color-black: #000;
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
    background-color: var(--color-background-default);
    color: var(--color-primary);

    max-width: 100rem;

    margin: 0 auto;
    padding: 0 4%;

    line-height: 1.3;
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
