import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="landing-page" className="navbar-brand" href="#">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="about-me" offset={-65} className="nav-link" href="#">
                <i className="fas fa-user"></i>
                About Me
              </Link>
              <Link to="my-skills" offset={-65} className="nav-link" href="#">
                <i className="fas fa-hand-sparkles"></i>
                Skills
              </Link>
              <Link to="projects" offset={-65} className="nav-link" href="#">
                <i className="fas fa-file-powerpoint"></i>
                Projects
              </Link>
              <Link to="contacts" className="nav-link" href="#">
                <i className="fas fa-envelope"></i>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
