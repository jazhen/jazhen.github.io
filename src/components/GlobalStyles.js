import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size--1: clamp(0.75rem, 0.69rem + 0.17vw, 0.94rem);
    --font-size-0: clamp(1.00rem, 0.92rem + 0.22vw, 1.25rem);
    --font-size-1: clamp(1.33rem, 1.22rem + 0.30vw, 1.67rem);
    --font-size-2: clamp(1.78rem, 1.63rem + 0.40vw, 2.22rem);
    --font-size-3: clamp(2.37rem, 2.17rem + 0.53vw, 2.96rem);
    --font-size-4: clamp(3.16rem, 2.89rem + 0.70vw, 3.95rem);
    --font-size-5: clamp(4.21rem, 3.86rem + 0.94vw, 5.26rem);
    --font-family-primary: 'Poppins', 'Helvetica', 'Arial', sans-serif;
    --font-family-secondary: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    --border-radius: 4px;
    --color-black-900: rgba(0, 0, 0, 1);
    --color-black-800: rgba(0, 0, 0, .87);
    --color-white-900: rgba(255, 255, 255, 1);
    --color-white-800: rgba(255, 255, 255, .87);
  }

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
    background-color: ${({ theme }) => theme.color.background};
    line-height: 1.5;
  }
`;

export default GlobalStyles;
