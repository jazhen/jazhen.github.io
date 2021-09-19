import Groovetown from "./groovetown.inline.svg";
import MamasHelper from "./mamas-helper.inline.svg";
import WaterTheTrees from "./water-the-trees.inline.svg";

const projects = [
  {
    header: "Water The Trees",
    body: "An open source tree mapping, planting, and maintenance platform partnered with Code for America, The Sierra Club, and Public Works.",
    overline: "Open Source Contributor",
    github:
      "https://github.com/waterthetrees/wtt_server/commits/development?author=jazhen",
    website: "https://waterthetrees.com",
    technologies: ["React-Query", "Node", "Material UI", "Mapbox", "Docker"],
    SVG: WaterTheTrees,
    backgroundColor: "#d7ccc8",
  },
  {
    header: "Groovetown",
    body: "An online music distribution website that enables its users to upload, download, and stream music.",
    overline: "Full Stack Engineer",
    github: "https://github.com/jazhen/groove_town",
    website: "https://groovetown.herokuapp.com",
    technologies: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "AWS S3"],
    SVG: Groovetown,
    backgroundColor: "#bbdefb",
  },
  {
    header: "Mama's Helper",
    body: "A management assistance tool that helps individuals and teams organize, track, and manage their work.",
    overline: "Front End Lead",
    github: "https://github.com/jmcbgaston/mamas_helper/commits?author=jazhen",
    website: "https://mamas-helper.herokuapp.com",
    technologies: ["React", "Redux", "Node", "MongoDB", "Sendgrid"],
    SVG: MamasHelper,
    backgroundColor: "#fce4ec",
  },
];

export default projects;
