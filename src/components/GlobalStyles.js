import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
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

export default GlobalStyles;
