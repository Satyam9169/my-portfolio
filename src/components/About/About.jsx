import React from "react";
import "./About.css";
import satyam from "../../assets/Images/satyam.jpg";

const About = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ZyJz0zNZTwACfwnWDdKpDBNXYvBQNELi/view?usp=sharing"
    ),
      (target = "_blank");
  };
  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <p className="line"></p>
              <h1 className="text-primary">About Us</h1>
              <p>
                I am a curious learner and creative team player with Almost 3
                years of professional experience. Interested in the Software
                Developer role, I aim to apply my coding and software
                development expertise effectively.
              </p>
              <p>
                My goal is to contribute to innovative projects and drive
                success through collaborative problem-solving.
              </p>
              <button
                className="btn btn-outline-secondary"
                onClick={handleResume}>
                Download Resume
              </button>
              <div className="py-5">
                <h3 className="text-primary">Tech Stack</h3>
                <span>
                  <ul className="tech-stack">
                    <li>
                      <button className="btn btn-outline-secondary">
                        HTML
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">CSS</button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        TailWind CSS
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        JavaScript
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        ES-6
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        React.JS
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        Redux
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        BootStrap
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">
                        WebPack
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">NPM</button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">GIT</button>
                    </li>
                    <li>
                      <button className="btn btn-outline-secondary">SVN</button>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="satyam-image">
                <img
                  src={satyam}
                  alt="satyam-agrahari-image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
