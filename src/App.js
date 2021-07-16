import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Section from './components/Section';

function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Section/>
    </Fragment>
  );
}

export default App;
