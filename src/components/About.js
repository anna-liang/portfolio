import React from 'react';
import '../styles/About.css';
import '../styles/Main.css';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';

function About () {
    return (
        <div className="about-container">
            <div className="about">
                <h1 className="subheading">About</h1>
                <div className="my-info">
                    <p>I graduated from the University of Toronto with a passion for creating things.</p>
                    <p>I've worked various web development positions as an intern during my time at school. After graduating, I worked as a full-stack mobile developer for a neobank startup.</p>
                    <p>As a result of my work, I've developed a passion for both web and mobile development and I am seeking full-stack opportunities.</p>
                    <p>In addition to programming, I spend my spare time watching movies, reading, drawing, and playing video games!</p>
                    <p>Learn more about my experience and my projects down below.</p>
                </div>
                <div className="my-links">
                    <a href="https://www.linkedin.com/in/anna-liang-873370156/" target="_blank" rel="noreferrer">
                        <img src={linkedin} className="info" alt="LinkedIn logo"/>
                    </a>
                    <a href="https://github.com/anna-liang/" target="_blank" rel="noreferrer">
                        <img src={github} className="info" alt="Github logo"/>
                    </a>
                    <form action="/portfolio/resume.pdf" target="_blank" rel="noreferrer">
                        <input type="submit" className="btn btn-outline-dark" value="Resume" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default About;