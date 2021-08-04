import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#a">
            <i class="fas fa-home"></i>
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#a">
                <i class="fas fa-user"></i>
                About
              </a>
              <a class="nav-link" href="#a">
                <i class="fas fa-hand-sparkles"></i>
                Skills
              </a>
              <a class="nav-link" href="#a">
                <i class="fas fa-file-powerpoint"></i>
                Projects
              </a>
              <a class="nav-link" href="#a">
                <i class="fas fa-envelope"></i>
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
