import React from "react";
import styled from "styled-components";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import OpenSourceProjects from "../components/OpenSourceProjects";
import PersonalProjects from "../components/PersonalProjects";
import useAssetsQuery from "../hooks/useAssetsQuery";

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 6%;
`;

const MainContent = styled.div`
  max-width: 100rem;
`;

const IndexPage = () => {
  const assets = useAssetsQuery();

  return (
    <Layout>
      <HeroSection avatar={assets.avatar} resume={assets.Jason_Zhen_Resume} />
      <MainContentContainer>
        <MainContent>
          <Experience />
          <OpenSourceProjects />
          <PersonalProjects />
        </MainContent>
      </MainContentContainer>
    </Layout>
  );
};

export default IndexPage;
