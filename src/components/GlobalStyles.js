import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    ${"" /* font-family: ${({ theme }) => theme.fontFamily.primary}; */}
    font-size: 16px;
    ${"" /* color: ${({ theme }) => theme.color.primaryText}; */}
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    line-height: 1.5;
  }
`;

export default GlobalStyles;
