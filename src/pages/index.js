import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import OpenSourceProjects from "../components/OpenSourceProjects";
import PersonalProjects from "../components/PersonalProjects";
import useAssetsQuery from "../hooks/useAssetsQuery";

const darkTheme = {
  color: {
    background: "rgba(18, 18, 18, 1)",
    paper: "rgba(48, 48, 48, 1)",
    primary: "rgba(98, 0, 238, 1)",
    onPimary: "rgba(18, 18, 18, 1)",
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
      <Layout>
        <HeroSection avatar={assets.avatar} resume={assets.Jason_Zhen_Resume} />
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
