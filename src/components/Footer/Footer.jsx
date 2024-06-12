import React from "react";
import logo from "../../assets/Images/satyamLOGO.png";
import { Link } from "react-router-dom";
import "./Footer.css"; // Add a new CSS file for the footer
import {
  Linkedin,
  Github,
  Email,
  Location,
  Phone,
  JavaScript,
} from "../../Utils/constant.jsx";
import useFooter from "./useFooter.jsx";

const Footer = () => {
  // we are using here custom hooks for performance optimization
  /* 
  1) Neat and clean code
  2) code spliting
  3) speed fast
  4) good understandable
  5) other developer can read 
  */
  const { handleGithub, handleLinkedin, currentYear, handleJavaScript } =
    useFooter();

  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={logo} alt="footer logo" className="footer-logo" />
            <p>
              <Location /> Noida, UP
            </p>
            <p>
              <a
                className="text-white text-decoration-none"
                href="mailto:satyamagrahari952@gmail.com">
                <Email /> satyamagrahari952@gmail.com
              </a>
            </p>
            <p>
              <Phone /> +91 1234567890
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect with Us</h5>

            <ul className="list-unstyled d-flex direction-column">
              <li className="mb-2">
                <Link onClick={handleLinkedin} className="footer-link ">
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link onClick={handleGithub} className="footer-link mx-2">
                  <Github />
                </Link>
              </li>
              <li>
                <Link onClick={handleJavaScript} className="footer-link mx-2">
                  <JavaScript />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="nameHelp"
                  style={{ backgroundColor: "#fff" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{ backgroundColor: "#fff" }}
                />
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ backgroundColor: "#fff" }}></textarea>
                <label htmlFor="floatingTextarea">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="text-center text-white">
          <hr className="skywhite-line" />
          &copy; {currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
