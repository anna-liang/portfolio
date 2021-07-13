import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import moodBoardImg from '../media/mood-board.gif'

function Projects () {
    return (
        <div class="projects">
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
              justify={1}
              mongo={1}
              node={1}
              react={1}
            />
          </Fade>
        </div>
      );
}

export default Projects;