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
        "https://user-images.githubusercontent.com/6326660/102150215-e8c68080-3e24-11eb-92f2-40ce2b72686b.jpg",
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
        "https://user-images.githubusercontent.com/6326660/103400725-0bca8300-4afb-11eb-8311-d57e261238c4.gif",
      technologies: ["React", "Redux", "Node", "MongoDB", "Sendgrid"],
    },
    {
      title: "Snack Pack",
      description: "A minigame compilation HTML5 game",
      githubURL: "https://github.com/jazhen/snack-pack",
      websiteURL: "https://jazhen.github.io/snack-pack",
      image:
        "https://user-images.githubusercontent.com/6326660/103401194-c8711400-4afc-11eb-89c5-d5c424f788e5.gif",
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
