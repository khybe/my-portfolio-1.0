import React from "react";

import "./Projects.css";
import Project from "./Project";

import { AiOutlineDown } from "react-icons/ai";

// Abbreviations: {horiz: horizontal, vert: vertical}
const Projects = (props) => {
  return (
    <div className="horiz-right vert-down">
      <div className="projects">
        {props.items.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
      <h4 className="scroll-down">Scroll down for more</h4>
      <AiOutlineDown className="scroll-down scroll-down-icon" />
    </div>
  );
};

export default Projects;
