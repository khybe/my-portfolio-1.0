import desktopBackground from "../../assets/about-me/desktopBackground.jpg";
import mobileBackground from "../../assets/about-me/mobileBackground.jpg";

import "./AboutMe.css";

// Abbreviation: {ctr: container, bg: background, horiz: horizontal, vert: vertical}
const AboutMe = (props) => {
  return (
    <section id="about-me">
      <h2 className="about-me__title">ABOUT ME</h2>
      <div className="about-me__contents-ctr">
        <div className="about-me__bio-bg" />
        <div className="about-me__bio">
          <article>
            <p>
              A self-taught frontend developer with the ability to take on a
              fullstack project.
            </p>
            <p>
              With passion for technology and building dynamic websites, desktop
              and mobile versions, I've spent the last four years learning
              different languages and tools to further improve my skills. So
              far, I've loved it and i don't think the passion to learn more and
              do more will ever end.
            </p>
            <p>
              If you want to learn more about me and my work, please visit my
              workspace or contact me directly and tell me about your project.
            </p>
          </article>
        </div>
        <div className="about-me__extra-info">
          <div className="about-me__languages">
            <h4>Languages that i use :</h4>
            <p>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
              <span>React.JS</span>
              <span>Next.JS</span>
            </p>
          </div>
          <div className="about-me__tools">
            <h4>Tools that i use :</h4>
            <p>
              <span>Terminal</span>
              <span>Text editor: V.S</span>
              <span>Git</span>
              <span>GitHub</span>
            </p>
          </div>
        </div>
      </div>
      <img
        src={desktopBackground}
        alt="Background for desktop version"
        className="about-me__horiz-bg"
      />
      <img
        src={mobileBackground}
        alt="Background for mobile version"
        className="about-me__vert-bg"
      />
    </section>
  );
};

export default AboutMe;
