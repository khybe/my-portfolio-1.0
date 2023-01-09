import Projects from "./Projects";

import myWorkPic from "../../assets/my-work/myWork.jpg";

import "./MyWork.css";

// Abbreviations: {horiz: horizontal, vert: vertical}
const MyWork = (props) => {
  return (
    <section id="my-work">
      <div className="horiz-left vert-up">
        <h2 className="title">MY WORK</h2>
        <img src={myWorkPic} alt="Work space pic" className="work-space-pic" />
      </div>
      <Projects />
    </section>
  );
};

export default MyWork;
