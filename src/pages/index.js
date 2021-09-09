import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import SEO from "../components/SEO";
import About from "../components/V3/About";
import Experience from "../components/V3/Experience";
import Footer from "../components/V3/Footer";
import Hero from "../components/V3/Hero";
import Nav from "../components/V3/Nav";
import Projects from "../components/V3/Projects";

const darkTheme = {
  color: {
    background: "rgba(18, 18, 18, 1)",
    paper: "rgba(48, 48, 48, 1)",
    primary: "rgba(107, 99, 255, 1)",
    secondary: "rgba(3, 218, 198, 1)",
    onPrimary: "rgba(255, 255, 255, 0.87)",
    primaryText: "rgba(255, 255, 255, 1)",
    secondaryText: "rgba(255, 255, 255, 0.87)",
  },
  fontFamily: {
    primary: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    secondary: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    tabletPortrait: "600px",
    tabletLandscape: "900px",
    desktop: "1200px",
    desktopLarge: "1800px",
    desktopExtraLarge: "2400px",
  },
  borderRadius: "4px",
};

const IndexPage = () => (
  <ThemeProvider theme={darkTheme}>
    <SEO />
    <GlobalStyles />
    <Nav />
    <Hero />
    <Projects />
    <Experience />
    <About />
    <Footer />
  </ThemeProvider>
);

export default IndexPage;
