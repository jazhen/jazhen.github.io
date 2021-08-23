import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import H4 from "../components/Headers/H4";
import HeroSection from "../components/HeroSection";
import GroovetownIcon from "../components/Icons/GroovetownIcon";
import MamasHelperIcon from "../components/Icons/MamasHelperIcon";
import SnackPackIcon from "../components/Icons/SnackPackIcon";
import Layout from "../components/Layout";

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 4%;
`;

const MainContent = styled.div`
  max-width: 100rem;
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: clamp(1em, -0.1428571428571428em + 5.714285714285714vw, 2em);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1em, 0em + 2.666666666666667vw, 2em);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5em, 0em + 2vw, 2em);
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
        {/* <H3>Experience</H3>
        <Card
          title="Computer Science For Kids"
          image="https://jazhen.github.io/images/cs4k.png"
        /> */}

        {/* <H4>Open Source Projects</H4>
        <Card title="Water The Trees" /> */}

        <H4>Personal Projects</H4>
        <Projects />
      </MainContent>
    </MainContentContainer>
  </Layout>
);

export default IndexPage;
