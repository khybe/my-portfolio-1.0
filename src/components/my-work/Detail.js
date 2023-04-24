import { AiOutlineClose } from "react-icons/ai";

import "./Detail.css";

const Detail = (props) => {
  return (
    <div className="project-detail">
      <AiOutlineClose
        onClick={props.onCancel}
        className="close-icon"
        size="2.5rem"
      />
      <h2>{props.title}</h2>
      <hr />
      <p>{props.description}</p>
      <hr />

      <footer className="controllers">
        <a
          href={props.webLink}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Website
        </a>
        {props.githubLink && (
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Github
          </a>
        )}
      </footer>
    </div>
  );
};

export default Detail;
