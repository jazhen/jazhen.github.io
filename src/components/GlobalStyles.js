import { createGlobalStyle } from "styled-components";

/**
 * @link https://utopia.fyi/type/calculator?c=600,16,1.25,1140,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-xl
 */
const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-primary: 'Lato', 'Helvetica', 'Arial', sans-serif;
    --max-width: 71.25rem;

    --font-size--1: clamp(0.80rem, 0.58rem + 0.59vw, 1.00rem);
    --font-size-0: clamp(1.00rem, 0.72rem + 0.74vw, 1.25rem);
    --font-size-1: clamp(1.25rem, 0.90rem + 0.93vw, 1.56rem);
    --font-size-2: clamp(1.56rem, 1.13rem + 1.16vw, 1.95rem);
    --font-size-3: clamp(1.95rem, 1.41rem + 1.45vw, 2.44rem);
    --font-size-4: clamp(2.44rem, 1.76rem + 1.81vw, 3.05rem);
    --font-size-5: clamp(3.05rem, 2.20rem + 2.26vw, 3.82rem);

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    --padding-inline-section: clamp(1em, -1.2222222222222223em + 5.9259259259259265vw, 3em);
    --padding-block-section: clamp(4em, 1.7777777777777777em + 5.9259259259259265vw, 6em);

    --color-black-900: rgba(0, 0, 0, 1);
    --color-white-900: rgba(255, 255, 255, 1);
    --color-white-800: rgba(255, 255, 255, .92);
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
    line-height: 1.5;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
