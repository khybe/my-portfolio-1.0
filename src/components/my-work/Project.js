import { useState } from "react";

import Detail from "./Detail";

import "./Project.css";

const Project = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const showDetailHandler = (e) => {
    e.preventDefault();

    setShowDetail(true);
  };

  const cancelDetailHandler = (e) => {
    e.preventDefault();

    setShowDetail(false);
  };

  return (
    <div className="project">
      <a href={props.srcLink} target="_blank" rel="noreferrer">
        <figure>
          <figcaption>{props.title}</figcaption>
          <img src={props.image} alt="Project 1 Pig game" />
        </figure>
      </a>
      <button onClick={showDetailHandler}>Detail</button>
      {showDetail && (
        <div className="modal" onClick={cancelDetailHandler}>
          <Detail
            title={props.title}
            description={props.description}
            link={props.link}
            github={props.github}
            onCancel={cancelDetailHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
