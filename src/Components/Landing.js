import React from 'react';
import Typed from 'react-typed';
import author from '../Images/me.jpg';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-4">
            <img className="image-profile" src={author} alt="Author" />
          </div>
          <div className="col-md-8">
            <div className="greeting">
              Hello, my name is <span id="name">Piotr Kędzierski</span> and I'm
              a
              <br />
              <Typed
                className="typed-text"
                strings={[
                  'Front-End Developer.',
                  'Die Hard Gamer.',
                  'Formula 1 Fan.',
                  'Cycling Enthusiast.',
                ]}
                typeSpeed={80}
                backSpeed={65}
                backDelay={2000}
                loop
              />
            </div>
          </div>
        </div>
        <div className="row row-bottom text-center">
          <div className="col">
            <button type="button" class="btn btn-warning btn-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
