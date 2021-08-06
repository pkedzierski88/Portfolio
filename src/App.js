import React, { Fragment } from 'react';
import './App.scss';
import AboutMe from './Components/AboutMe';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
    </Fragment>
  );
};

export default App;
