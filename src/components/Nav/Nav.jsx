import React from "react";
import logo from "../../assets/Images/satyamLOGO.png";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-dark navbar-skyblack">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <img src={logo} alt="website logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-3 mb-lg-0 text-center">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/experience"}>
                    Experience
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/skills"}>
                    TechStack
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/project"}>
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Nav;
