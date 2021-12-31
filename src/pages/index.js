import React from "react";
import { ThemeProvider } from "styled-components";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

const darkTheme = {
  color: {
    primary: "rgba(107, 99, 255, 1)",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    desktop: "56.25rem",
  },
};

const IndexPage = () => (
  <ThemeProvider theme={darkTheme}>
    <SEO />
    <GlobalStyles />
    <Nav />
    <Hero />
    <Projects />
    <Experience />
    <Footer />
  </ThemeProvider>
);

export default IndexPage;
