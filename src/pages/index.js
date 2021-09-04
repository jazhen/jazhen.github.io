import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import SEO from "../components/SEO";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Experience from "../components/Sections/Experience";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import Hero from "../components/Sections/Hero";
import Projects from "../components/Sections/Projects";
import useAssetsQuery from "../hooks/useAssetsQuery";

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
    xs: "37.5rem",
    sm: "50rem",
    md: "75rem",
    lg: "100rem",
  },
  borderRadius: "4px",
};

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContent = styled.div`
  max-width: 100rem;
  margin: 0 6% 6%;
`;

const IndexPage = () => {
  const assets = useAssetsQuery();

  return (
    <ThemeProvider theme={darkTheme}>
      <SEO />
      <GlobalStyles />
      <MainContentContainer>
        <MainContent>
          <Header />
          <Hero />
          <Projects />
          {/* <Experience /> */}
          <About />
          <Contact />
        </MainContent>
      </MainContentContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
