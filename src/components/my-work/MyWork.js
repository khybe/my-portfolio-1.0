import Projects from "./Projects";

import myWorkPic from "../../assets/my-work/myWork.jpg";
import pigGame from "../../assets/my-work/myWorkPigGame.png";
import guessMyNumber from "../../assets/my-work/myWorkGuessMyNumber.png";
import simonSays from "../../assets/my-work/myWorkSimonSays.png";
import yourplace from "../../assets/my-work/myWorkYourplace.png";
import comingSoon from "../../assets/my-work/myWorkComingSoon.jpg";

import "./MyWork.css";

const projectList = [
  {
    id: "p2",
    title: "Guess My Number",
    image: guessMyNumber,
    description: `Is an online game where players try to guess a randomly generated number in the fewest number of attempts possible.
     It is a simple yet engaging game that can be played alone or with friends.`,
    github: "https://github.com/khybe/guess-my-number",
    link: "https://guess-my-number-eight-plum.vercel.app/",
  },
  {
    id: "p1",
    title: "Pig Game",
    image: pigGame,
    description: `A simple dice game where players roll a die and accumulate points, but risk losing all points for the turn if they roll a 
    1. The winner is the first to reach 100 points.
    2. It's a jeopardy game where players make decisions on whether to risk previous gains for greater gains by rolling again.`,
    github: "https://github.com/khybe/pig-game",
    link: "https://pig-game-bay.vercel.app/",
  },
  {
    id: "p3",
    title: "Simon Says",
    image: simonSays,
    description: `A simple interactive game built using Javascript and React.js, where the computer plays a sequence that the user must remember.
    The game can improve cognitive skills such as working memory and attention.`,
    github: "https://github.com/khybe/Simon-says",
    link: "https://simon-says-orcin.vercel.app/",
  },
  {
    id: "p4",
    title: "Yourplace",
    image: yourplace,
    description: `Your Places is a MERN full-stack web app with MongoDB, Express, React, and Node.
      It has auth, authorization, CRUD operations, and uses AWS S3 for image storage. Users can add multiple 
      locations and view them on a Google Map modal.`,
    github:
      "https://github.com/khybe/yourplace-MERN-project-with-CRUD-operations-frontend",
    link: "https://yourplace-6ac22.web.app/",
  },
  { id: "p5", title: "Coming Soon", image: comingSoon },
  { id: "p6", title: "Coming Soon", image: comingSoon },
];

// Abbreviations: {horiz: horizontal, vert: vertical}
const MyWork = (props) => {
  return (
    <section id="my-work">
      <div className="horiz-left vert-up">
        <h2 className="title">MY WORK</h2>
        <img src={myWorkPic} alt="Work space pic" className="work-space-pic" />
      </div>
      <Projects items={projectList} />
    </section>
  );
};

export default MyWork;
