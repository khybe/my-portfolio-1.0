import React from "react";

import "./Projects.css";
import Project from "./Project";

import pigGame from "../../assets/my-work/myWorkPigGame.png";
import guessMyNumber from "../../assets/my-work/myWorkGuessMyNumber.png";
import simonSays from "../../assets/my-work/myWorkSimonSays.png";
import yourplace from "../../assets/my-work/myWorkYourplace.png";
import comingSoon from "../../assets/my-work/myWorkComingSoon.jpg";
import { AiOutlineDown } from "react-icons/ai";

const projectsList = [
  {
    id: "p2",
    name: "Guess My Number",
    image: guessMyNumber,
    githubLink: "https://github.com/khybe/guess-my-number",
    srcLink: "https://guess-my-number-eight-plum.vercel.app/",
  },
  {
    id: "p1",
    name: "Pig Game",
    image: pigGame,
    githubLink: "https://github.com/khybe/pig-game",
    srcLink: "https://pig-game-bay.vercel.app/",
  },
  {
    id: "p3",
    name: "Simon Says",
    image: simonSays,
    githubLink: "https://github.com/khybe/Simon-says",
    srcLink: "https://simon-says-orcin.vercel.app/",
  },
  {
    id: "p4",
    name: "Yourplace",
    image: yourplace,
    githubLink:
      "https://github.com/khybe/yourplace-MERN-project-with-CRUD-operations-frontend",
    srcLink: "https://yourplace-6ac22.web.app/",
  },
  { id: "p5", name: "Coming Soon", image: comingSoon, githubLink: "" },
  { id: "p6", name: "Coming Soon", image: comingSoon, githubLink: "" },
];

// Abbreviations: {horiz: horizontal, vert: vertical}
const Projects = () => {
  return (
    <div className="horiz-right vert-down">
      <div className="projects">
        {projectsList.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            githubLink={project.githubLink}
            srcLink={project.srcLink}
          />
        ))}
      </div>
      <h4 className="scroll-down">Scroll down for more</h4>
      <AiOutlineDown className="scroll-down scroll-down-icon" />
    </div>
  );
};

export default Projects;
