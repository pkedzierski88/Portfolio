import React from 'react';
import './AboutMe.scss';
import cyclist from '../Images/me-cyclist.jpg';

const AboutMe = () => {
  return (
    <div id="about-me" className="about-me-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img className="image-cyclist" src={cyclist} alt="Cyclist" />
          </div>
          <div className="col-lg-6 text-center">
            <h1>About Me</h1>
            <p className="personal-info mt-4">
              Hi there! My name is Piotrek. I am a beginner Front-End Developer.
              I completed a stationary programming course and a few internet
              courses which allowed me to gain the skills necessary to create
              simple projects. I am continuing my education and broadening my
              knowledge of JavaScript and React.
            </p>
            <p className="personal-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet eligendi qui deleniti minima animi et repellat ea a?
              Temporibus optio animi quae, ab accusantium sapiente laboriosam
              minus quasi repellat! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur ipsam velit, vero aliquam quasi
              blanditiis, repellendus earum adipisci ducimus sit molestiae
              dolorem deleniti eveniet nesciunt, reiciendis autem minima! Harum,
              sed?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
