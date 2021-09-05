import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import SEO from "../components/SEO";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import Main from "../components/Sections/Main";
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
    tabletPortrait: "600px",
    tabletLandscape: "900px",
    desktop: "1200px",
    desktopLarge: "1800px",
  },
  borderRadius: "4px",
};

const IndexPage = () => {
  const assets = useAssetsQuery();

  return (
    <ThemeProvider theme={darkTheme}>
      <SEO />
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 4% auto 4%;
  grid-template-areas:
    ". header ."
    ". main ."
    "footer footer footer";

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-template-columns: 6% auto 6%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-template-columns: 8% auto 8%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 12% auto 12%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    grid-template-columns: 18% auto 18%;
  }
`;

export default IndexPage;
