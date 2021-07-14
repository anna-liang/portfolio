import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import moodBoardImg from '../media/mood-board.gif'
import lrddImg from '../media/lrdd.png';

function Projects () {
    return (
        <div class="projects">
          <h1>Projects</h1>
          <Fade left>
            <Project
              img={moodBoardImg}
              title="Mood Board"
              desc="Mood Board creates a collection of a user's top 9 Spotify tracks organized in one cohesive a mood board. A Python web application built on a Django framework."
              python={1}
              github="https://github.com/anna-liang/mood-board"
              app="https://mood-boards.herokuapp.com/moodboard"
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
        </div>
      );
}

export default Projects;