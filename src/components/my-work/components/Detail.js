import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "../../ui/Backdrop";
import "./Detail.css";

const DetailModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const closeModalHandler = () => {
    setShowModal(false);
    setTimeout(() => {
      props.onCancel();
    }, 400);
  };

  const modalClasses = `modal ${showModal ? "open" : "closed"}`;

  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onClick={closeModalHandler} />
      <div className={modalClasses}>
        <div className="detail-content">
          <AiOutlineClose
            onClick={closeModalHandler}
            className="detail-content__close-icon"
            size="2.5rem"
          />
          <h2>{props.title}</h2>
          <hr />
          <p>{props.description}</p>
          <hr />

          <footer className="detail-content__actions">
            {props.webLink && (
              <a
                href={props.webLink}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Website
              </a>
            )}
            {props.githubLink && (
              <a
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Github
              </a>
            )}
          </footer>
        </div>
      </div>
    </Fragment>,
    document.getElementById("modal-hook")
  );
};

export default DetailModal;
