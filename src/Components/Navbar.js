import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#landing-page">
            <i className="fas fa-home"></i>
            Home
          </a>
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
              <a className="nav-link" aria-current="page" href="#about-me">
                <i className="fas fa-user"></i>
                About Me
              </a>
              <a className="nav-link" href="#my-skills">
                <i className="fas fa-hand-sparkles"></i>
                Skills
              </a>
              <a className="nav-link" href="#projects">
                <i className="fas fa-file-powerpoint"></i>
                Projects
              </a>
              <a className="nav-link" href="#a">
                <i className="fas fa-envelope"></i>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
