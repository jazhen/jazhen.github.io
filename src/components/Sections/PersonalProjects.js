import React from "react";
import Card from "../Card";
import ThreeColumnContainer from "../Containers/ThreeColumnContainer";
import H4 from "../Headers/H4";

const PersonalProjects = () => {
  const personalProjects = [
    {
      title: "Groovetown",
      description: "A music sharing and streaming platform",
      githubURL: "https://github.com/jazhen/groove_town",
      websiteURL: "https://groovetown.herokuapp.com",
      image:
        "https://user-images.githubusercontent.com/6326660/130603129-876d985d-2400-454d-a5eb-91ec37ec24b7.png",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Mama's Helper",
      description: "A management assistance tool",
      githubURL: "https://github.com/jmcbgaston/mamas_helper",
      websiteURL: "https://mamas-helper.herokuapp.com",
      image:
        "https://user-images.githubusercontent.com/6326660/130603108-06f92f2b-1cc0-41af-b86d-219c9a6aff0f.png",
      technologies: ["React", "Redux", "Node", "MongoDB", "Sendgrid"],
    },
    {
      title: "Snack Pack",
      description: "A minigame compilation HTML5 game",
      githubURL: "https://github.com/jazhen/snack-pack",
      websiteURL: "https://jazhen.github.io/snack-pack",
      image:
        "https://user-images.githubusercontent.com/6326660/130603139-af572975-2fe1-4157-9742-5ac0a7bdb211.png",
      technologies: ["JavaScript", "HTML", "CSS", "Webpack"],
    },
  ];

  return (
    <>
      <H4>Personal Projects</H4>
      <ThreeColumnContainer>
        {personalProjects.map(
          ({
            title,
            description,
            githubURL,
            websiteURL,
            logo,
            image,
            technologies,
          }) => (
            <Card
              key={title}
              title={title}
              description={description}
              githubURL={githubURL}
              websiteURL={websiteURL}
              logo={logo}
              image={image}
              technologies={technologies}
            />
          )
        )}
      </ThreeColumnContainer>
    </>
  );
};

export default PersonalProjects;
