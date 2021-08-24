import React from "react";
import Card from "../Card";
import TwoColumnContainer from "../Containers/TwoColumnContainer";
import H4 from "../Headers/H4";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Science For Kids",
      description: `I visited different schools in Davis and Woodland,
      introducing computer science fundamentals to middle school students using
      Scratch MIT.`,
      websiteURL: false,
      githubURL: false,
      image: "https://jazhen.github.io/images/cs4k.png",
    },
  ];

  return (
    <>
      <H4>Experience</H4>
      <TwoColumnContainer>
        {experiences.map((experience) => (
          <Card {...experience} />
        ))}
      </TwoColumnContainer>
    </>
  );
};

export default Experience;
