import React from 'react';
import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper bg-dark">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xs-12 text-md-start text-center my-4 first-column">
            <Link to="landing-page" className="footer-link">
              Home
            </Link>
            <Link to="about-me" offset={-65} className="footer-link">
              About&nbsp;Me
            </Link>
            <Link to="my-skills" offset={-65} className="footer-link">
              Skills
            </Link>
            <Link to="projects" offset={-65} className="footer-link">
              Projects
            </Link>
          </div>
          <div className="col-md-6 col-xs-12 text-md-end text-center">
            <p>
              Created By Piotr Kędzierski 2021<span>&copy;</span>
            </p>
            <p>
              <a href="mailto:piotr.kedzierski.88@gmail.com">
                piotr.kedzierski.88@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:502114285">+48 502 114 285</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
