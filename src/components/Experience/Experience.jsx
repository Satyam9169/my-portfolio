import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="py-5">
      <div className="experience-section container ">
        <h1 className="text-primary">Experience</h1>
        <p className="experienceline"></p>
        <div className="timeline py-4">
             <div className="timeline-item right">
            <div
              className="card shadow btn btn-outline-secondary border border-primary-subtle"
              style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">System Engineer</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  TaTa Consultancy Services
                </h6>
                <p className="card-text">Noverber(2024) to present</p>
              </div>
            </div>
          </div>

          <div className="timeline-item left">
            <div
              className="card shadow btn btn-outline-secondary border border-primary-subtle"
              style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Senior Software Engineer</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  LTIMINDTREE LTD
                </h6>
                <p className="card-text">July(2023) to September(2023)</p>
              </div>
            </div>
          </div>

          <div className="timeline-item right">
            <div
              className="card shadow btn btn-outline-secondary border border-primary-subtle"
              style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Software Engineer</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  LTIMINDTREE LTD
                </h6>
                <p className="card-text">July(2021) to June(2023)</p>
              </div>
            </div>
          </div>

          <div className="timeline-item left">
            <div
              className="card shadow btn btn-outline-secondary border border-primary-subtle"
              style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Internship</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  LTIMINDTREE LTD
                </h6>
                <p className="card-text">March(2021) to June(2021)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
