import React, { useState, Fragment } from "react";

import DetailModal from "./Detail";
import "./Project.css";

const Project = (props) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const showDetailModalHandler = () => setShowDetailModal(true);

  const hideDetailModalHandler = () => setShowDetailModal(false);

  return (
    <Fragment>
      {showDetailModal && (
        <DetailModal
          onCancel={hideDetailModalHandler}
          title={props.title}
          description={props.description}
          webLink={props.link}
          githubLink={props.github}
        />
      )}
      <li className="project">
        <a href={props.link} target="_blank" rel="noreferrer">
          <figure>
            <figcaption>{props.title}</figcaption>
            <img src={props.image} alt="Project 1 Pig game" />
          </figure>
        </a>
        <button onClick={showDetailModalHandler} className="button">
          Detail
        </button>
      </li>
    </Fragment>
  );
};

export default Project;
