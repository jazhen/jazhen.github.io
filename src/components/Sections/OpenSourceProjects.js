import React from "react";
import Card from "../Card";
import TwoColumnContainer from "../Containers/TwoColumnContainer";
import H4 from "../Headers/H4";

const OpenSourceProjects = () => {
  const openSourceProjects = [
    {
      title: "Water The Trees",
      description: `An open source tree mapping, planting,
      and maintenance project partnered with Code for America, The Sierra Club,
      and Public Works.`,
      websiteURL: "https://waterthetrees.com",
      githubURL: "https://github.com/waterthetrees",
      technologies: ["React", "React-Query", "Node", "Mapbox", "Docker"],
      image:
        "https://user-images.githubusercontent.com/6326660/130603096-36a7d113-ee72-4fb2-9b3b-d8eb094d6098.png",
    },
  ];

  return (
    <>
      <H4>Open Source Projects</H4>
      <TwoColumnContainer>
        {openSourceProjects.map((experience) => (
          <Card {...experience} />
        ))}
      </TwoColumnContainer>
    </>
  );
};

export default OpenSourceProjects;
