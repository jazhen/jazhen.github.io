import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --color-primary: rgba(255, 255, 255, 0.7);
    --color-secondary: #fff;
    --color-button-active: #fff;
    --color-button-hover: rgba(255, 255, 255, 0.8);
    --color-button-selected: rgba(255, 255, 255, 0.16);
    --color-background-default: #303030;
    --color-background-paper: #424242;
    --color-white: #fff;
    --color-black: #000;
    --elevation-01: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: var(--color-background-default);
    color: var(--color-primary);
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-family: "Poppins", "Helvetica", "Arial", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    // margin-bottom: 0.35em;
  }

  h1 {
    font-size: 93px;
    font-weight: 300;
    letter-spacing: -1.5px;
  }

  h2 {
    font-size: 58px;
    font-weight: 400;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 47px;
    font-weight: 400;
    letter-spacing: 0px;
  }

  h4 {
    font-size: 33px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }

  h5 {
    font-size: 23px;
    font-weight: 400;
    letter-spacing: 0px;
  }

  h6 {
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.15px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
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
