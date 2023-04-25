import React from "react";

import "./Home.css";

// Abbreviations: {bg: background, diag: diagonal, vert: vertical}
const Home = () => {
  return (
    <section id="home">
      <div className="home__contents">
        <div className="home__card-bg"></div>
        <div className="home__card-contents">
          <h2 className="hello">
            &#60; Hello,<span>I am</span> &#62;
          </h2>
          <h1>
            <span>KHAIBAR</span>
            <span>SAADAT</span>
          </h1>
          <h2 className="detail">&#60; A front-end developer &#62;</h2>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/khybe"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Github
          </a>
        </div>
      </div>
      <div className="home__quote">
        &lt;
        <q>
          <em>
            <span></span>Programming isn't about what you know; it's about what
            you can figure out.
          </em>
        </q>
        &gt;
        <p> &lt;&#47;-Chris Pine&gt;</p>
      </div>
      <div className="k">
        <div className="vert-line"></div>
        <div className="diag-1"></div>
        <div className="diag-2"></div>
      </div>
    </section>
  );
};

export default Home;
