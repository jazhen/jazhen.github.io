import * as React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import GroovetownIcon from "../components/Icons/GroovetownIcon";
import MamasHelperIcon from "../components/Icons/MamasHelperIcon";
import SnackPackIcon from "../components/Icons/SnackPackIcon";
import Layout from "../components/Layout";
import UserProfile from "../components/UserProfile";

const Container = styled.div`
  max-width: 900px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Groovetown",
      description: "A music sharing and streaming platform",
      githubUrl: "https://github.com/jazhen/groove_town",
      websiteUrl: "https://groovetown.herokuapp.com",
      logo: <GroovetownIcon size="x-large" />,
      image: "https://jazhen.github.io/images/Jason_Zhen.png",
    },
    {
      title: "Mama's Helper",
      description: "A management assistence tool",
      githubUrl: "https://github.com/jmcbgaston/mamas_helper",
      websiteUrl: "https://mamas-helper.herokuapp.com",
      logo: <MamasHelperIcon size="x-large" />,
      image: "https://jazhen.github.io/images/Jason_Zhen.png",
    },
    {
      title: "Snack Pack",
      description: "A minigame compilation HTML5 game",
      githubUrl: "https://github.com/jazhen/snack-pack",
      websiteUrl: "https://jazhen.github.io/snack-pack",
      logo: <SnackPackIcon size="x-large" />,
      image: "https://jazhen.github.io/images/Jason_Zhen.png",
    },
  ];

  return (
    <ProjectsContainer>
      {projects.map(
        ({ title, description, githubUrl, websiteUrl, logo, image }) => (
          <Card
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
    <Container>
      <UserProfile />
      <h2>Projects</h2>
      <Projects />
    </Container>
  </Layout>
);

export default IndexPage;
