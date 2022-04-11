import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import moodBoardImg from '../media/mood-board.png'
import lrddImg from '../media/lrdd.png';
import shinyTrackerImg from '../media/shiny-tracker.png';
import '../styles/Project.css';
import '../styles/Main.css';

function Projects () {
    return (
        <div class="projects">
          <h1 className="subheading">Projects</h1>
          <Fade left>
            <Project
              img={shinyTrackerImg}
              title="Shiny Tracker"
              desc="A Pok&eacute;mon shiny hunt counter and tracker for the most patient people in the world. A simple app using React and NodeJS with components from MUI."
              mongo={1}
              node={1}
              react={1}
              github="https://github.com/anna-liang/shiny-tracker"
              app="https://shinytracker.herokuapp.com/"
            />
          </Fade>
          <Fade right>
            <Project 
              img={lrddImg}
              title="La Room de Discode"
              desc="A collaborative videotelephony editor for users to host rooms and work on coding problems together. Built using the MERN stack architecture and GraphQL."
              justify={1}
              mongo={1}
              node={1}
              react={1}
              graphql={1}
              github="https://github.com/anna-liang/lrdd"
              app="https://lrdd.herokuapp.com/"
            />
          </Fade>
          <Fade left>
            <Project
              img={moodBoardImg}
              title="Mood Board"
              desc="Mood Board creates a collection of a user's top 9 Spotify tracks organized in one cohesive mood board. A Python web application built on a Django framework."
              python={1}
              github="https://github.com/anna-liang/mood-board"
              app="https://mood-boards.herokuapp.com/moodboard"
            />
          </Fade>
        </div>
      );
}

export default Projects;