import "./Project.css";

const Project = (props) => {
  return (
    <div className="project">
      <a href={props.srcLink} target="_blank" rel="noreferrer">
        <figure>
          <img src={props.image} alt="Project 1 Pig game" />
          <figcaption>{props.name}</figcaption>
        </figure>
      </a>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  );
};

export default Project;
