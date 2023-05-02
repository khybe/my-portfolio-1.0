import React from "react";
import { AiOutlineDown } from "react-icons/ai";

import Project from "./Project";
import "./Projects.css";

// Abbreviations: {horiz: horizontal, vert: vertical}
const Projects = (props) => {
  return (
    <div className="horiz-right vert-down">
      <ul className="projects">
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
      </ul>
      <h4 className="scroll-down">Scroll down for more</h4>
      <AiOutlineDown className="scroll-down scroll-down-icon" />
    </div>
  );
};

export default Projects;
