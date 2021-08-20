import PropTypes from "prop-types";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-200: #eeeeee;
    --gray-300: #e0e0e0;
    --gray-400: #bdbdbd;
    --gray-500: #9e9e9e;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
    --black: #121212;
  }

  html {
    font-size: 100%;
  }

  body {
    background-color: var(--black);
    color: var(--gray-400);
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    justify-content: center;
    line-height: 1.75;
    margin: 2em;
  }

  p {
    margin-bottom: 1rem;
    max-width: 70ch;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small, .text_small {
    font-size: 0.8rem;
  }

  a {
    color: blue;
  }

  a:hover {
    color: red;
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
