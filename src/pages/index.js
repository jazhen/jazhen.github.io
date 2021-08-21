import React from "react";
import styled from "styled-components";
import H3 from "../components/Base/H3";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import GroovetownIcon from "../components/Icons/GroovetownIcon";
import MamasHelperIcon from "../components/Icons/MamasHelperIcon";
import SnackPackIcon from "../components/Icons/SnackPackIcon";
import Layout from "../components/Layout";

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContent = styled.div`
  max-width: 900px;
  margin: 0 clamp(1em, 0.7241379310344828em + 1.3793103448275863vw, 1.5em);
`;

const ProjectsContainer = styled.div`
  ${
    "" /* display: grid;
  gap: 2em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  } */
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Groovetown",
      description: "A music sharing and streaming platform",
      githubUrl: "https://github.com/jazhen/groove_town",
      websiteUrl: "https://groovetown.herokuapp.com",
      logo: <GroovetownIcon size="medium" />,
      image:
        "https://user-images.githubusercontent.com/6326660/102150215-e8c68080-3e24-11eb-92f2-40ce2b72686b.jpg",
    },
    {
      title: "Mama's Helper",
      description: "A management assistance tool",
      githubUrl: "https://github.com/jmcbgaston/mamas_helper",
      websiteUrl: "https://mamas-helper.herokuapp.com",
      logo: <MamasHelperIcon size="medium" />,
      image:
        "https://user-images.githubusercontent.com/6326660/103400725-0bca8300-4afb-11eb-8311-d57e261238c4.gif",
    },
    {
      title: "Snack Pack",
      description: "A minigame compilation HTML5 game",
      githubUrl: "https://github.com/jazhen/snack-pack",
      websiteUrl: "https://jazhen.github.io/snack-pack",
      logo: <SnackPackIcon size="medium" />,
      image:
        "https://user-images.githubusercontent.com/6326660/103401194-c8711400-4afc-11eb-89c5-d5c424f788e5.gif",
    },
  ];

  return (
    <ProjectsContainer>
      {projects.map(
        ({ title, description, githubUrl, websiteUrl, logo, image }) => (
          <Card
            key={title}
            title={title}
            description={description}
            githubUrl={githubUrl}
            websiteUrl={websiteUrl}
            logo={logo}
            image={image}
          />
        )
      )}
    </ProjectsContainer>
  );
};

const IndexPage = () => (
  <Layout>
    <HeroSection />

    <MainContentContainer>
      <MainContent>
        <H3>Experience</H3>
        <Card
          title="Computer Science For Kids"
          image="https://jazhen.github.io/images/cs4k.png"
        />

        <H3>Open Source Projects</H3>
        <Card title="Water The Trees" />

        <H3>Personal Projects</H3>
        <Projects />

        <H3>Education</H3>
        <Card />
        <Card />
      </MainContent>
    </MainContentContainer>
  </Layout>
);

export default IndexPage;
