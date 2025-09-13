import React from 'react';
import { Project } from './Project';
import moodBoardImg from '../media/mood-board-small.png';
import lrddImg from '../media/lrdd-small.png';
import shinyTrackerImg from '../media/shiny-tracker-small.png';
import gamesLibraryImg from '../media/games-library-small.png';
import goldStickerTrackerImg from '../media/gold-sticker-tracker-small.png';
import '../styles/Project.css';
import '../styles/Main.css';

export const Projects = () => {
  const projects = [
    {
      img: null,
      title: '[WIP] MLB Dashboard',
      desc: `A complete dashboard for MLB's games, teams, players, and statistics. `,
      tools: ['Vue.js', 'TypeScript', 'Tailwind', 'Node.js'],
      github: 'https://github.com/anna-liang/mlb-dashboard',
    },
    {
      img: shinyTrackerImg,
      title: 'Shiny Tracker',
      desc: 'A Pokémon shiny hunt counter and tracker for those who like to find shiny pokémon.',
      tools: ['Vue.js', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/anna-liang/shiny-tracker',
      app: 'https://shiny-tracker-navy.vercel.app/',
    },
    {
      img: goldStickerTrackerImg,
      title: 'Gold Sticker Tracker',
      desc: 'Track progress towards the Completionist++ achievement in Balatro.',
      tools: ['React', 'TypeScript'],
      github: 'https://github.com/anna-liang/balatro-gold-sticker-tracker',
      app: 'https://anna-liang.github.io/balatro-gold-sticker-tracker/',
    },
    {
      img: gamesLibraryImg,
      title: 'Games Library',
      desc: 'Load your Steam library and view your games and achievements all on one dashboard.',
      tools: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
      github: 'https://github.com/anna-liang/games-library',
      app: 'https://games-library-murex.vercel.app/',
    },
    {
      img: lrddImg,
      title: 'La Room de Discode',
      desc: 'A collaborative videotelephony editor for users to host rooms and work on coding problems together.',
      tools: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'GraphQL'],
      github: 'https://github.com/anna-liang/lrdd',
    },
    {
      img: moodBoardImg,
      title: 'Mood Board',
      desc: "Mood Board creates a collection of a user's top 9 Spotify tracks organized in one cohesive mood board.",
      tools: ['Python', 'Django'],
      github: 'https://github.com/anna-liang/mood-board',
    },
  ];

  return (
    <div>
      <div className="subheading-container">
        <h1 className="subheading">Projects</h1>
      </div>
      <div className="projects">
        {projects
          ? projects.map((project) => (
              <Project
                img={project.img}
                title={project.title}
                desc={project.desc}
                tools={project.tools}
                github={project.github}
                key={project.title}
                app={project?.app}
              />
            ))
          : null}
      </div>
    </div>
  );
};
