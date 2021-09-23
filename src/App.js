import React from 'react';
import './App.scss';
import AboutMe from './Components/AboutMe';
import Landing from './Components/Landing';
import Layout from './Components/layout/Layout';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </Layout>
  );
};

export default App;
