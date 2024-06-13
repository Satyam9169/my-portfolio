import React from "react";
import portfolio from "../../assets/All/portfolio.png";
import movie from "../../assets/All/movie.png";
import userapp from "../../assets/All/userapp.png";
import "./Project.css";
import useProject from "./useProject";
import { Link } from "react-router-dom";

const Project = () => {
  const { portfolio_GithubLink, userApp_GithubLink, MovieApp_GithubLink } =
    useProject();

  const project = [
    {
      id: 1,
      projectname: portfolio,
      github: portfolio_GithubLink,
      project_title: "Portfolio App",
    },
    {
      id: 2,
      projectname: movie,
      github: MovieApp_GithubLink,
      project_title: "Movie Search App",
    },
    {
      id: 3,
      projectname: userapp,
      github: userApp_GithubLink,
      project_title: "User Management App",
    },
  ];

  return (
    <>
      <section className="allproject py-5">
        <div className="container">
          <div className="row">
            <div className="projectline">
              <h1 className="text-primary">Project</h1>
              <p className="newunderline"></p>
            </div>
            {project.map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-4 d-flex justify-content-center py-4">
                <div
                  className="card project-card shadow"
                  style={{ width: "17rem", height: "18rem" }}>
                  <img
                    src={item.projectname}
                    alt={`Project_Image ${item.id}`}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">{item.project_title}</h5>
                    <Link
                      onClick={item.github}
                      className="btn btn-outline-secondary ">
                      Github Link
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;