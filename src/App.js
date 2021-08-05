import React, { Fragment } from 'react';
import './App.scss';
import AboutMe from './Components/AboutMe';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <AboutMe />
    </Fragment>
  );
};

export default App;
