import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project';
import Section from './components/Section'

function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <div class="projects">
        <Fade left>
          <Project/>
        </Fade>
        <Fade right>
          <Project justify={1}/>
        </Fade>
      </div>
      <Section/>
    </Fragment>
  );
}

export default App;
