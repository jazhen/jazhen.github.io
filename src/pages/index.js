import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Experience from "../components/Sections/Experience";
import Footer from "../components/Sections/Footer";
import Hero from "../components/Sections/Hero";
import OpenSourceProjects from "../components/Sections/OpenSourceProjects";
import PersonalProjects from "../components/Sections/PersonalProjects";
import useAssetsQuery from "../hooks/useAssetsQuery";

const darkTheme = {
  color: {
    background: "rgba(18, 18, 18, 1)",
    paper: "rgba(48, 48, 48, 1)",
    primary: "rgba(98, 0, 238, 1)",
    secondary: "rgba(3, 218, 198, 1)",
    onPrimary: "rgba(255, 255, 255, 0.87)",
    white: "rgba(255, 255, 255, 1)",
    gray: "rgba(255, 255, 255, 0.87)",
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
  padding: 0 6% 4%;
`;

const MainContent = styled.div`
  max-width: 100rem;
`;

const IndexPage = () => {
  const assets = useAssetsQuery();

  return (
    <ThemeProvider theme={darkTheme}>
      <SEO />
      <Layout>
        <Hero avatar={assets.avatar} resume={assets.Jason_Zhen_Resume} />
        <MainContentContainer>
          <MainContent>
            <Experience />
            <OpenSourceProjects />
            <PersonalProjects />
          </MainContent>
        </MainContentContainer>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
