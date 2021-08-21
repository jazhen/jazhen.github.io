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
    --elevation-01: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: var(--color-background-default);
    color: var(--color-primary);
    margin: 2em;
    display: flex;
    justify-content: center;
  }

  h1, h2, h3, p {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  h2 {
    font-size: 2.125rem;
    font-weight: 400;
    letter-spacing: 0.25px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  p {
    font-size: 1rem;
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
