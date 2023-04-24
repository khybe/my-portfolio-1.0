import { useState } from "react";

import Detail from "./Detail";
import Backdrop from "../ui/Backdrop";

import "./Project.css";

const Project = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const showDetailHandler = (e) => {
    e.preventDefault();

    setShowDetail(true);
  };

  const closeDetailHandler = (e) => {
    e.preventDefault();

    setShowDetail(false);
  };

  return (
    <div className="project">
      <a href={props.link} target="_blank" rel="noreferrer">
        <figure>
          <figcaption>{props.title}</figcaption>
          <img src={props.image} alt="Project 1 Pig game" />
        </figure>
      </a>
      <button onClick={showDetailHandler}>Detail</button>
      {showDetail && (
        <>
          <Backdrop onClick={closeDetailHandler} />
          <div className="modal">
            <Detail
              title={props.title}
              description={props.description}
              webLink={props.link}
              githubLink={props.github}
              onCancel={closeDetailHandler}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
