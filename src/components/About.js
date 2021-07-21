import React, { Fragment } from 'react';
import '../styles/About.css';
import '../styles/Main.css';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';

function About () {
    return (
        <div className="about-container">
            <div className="about">
                <h1 className="subheading">About</h1>
                <h4>Hi, I'm <span className="name">Anna Liang</span>.</h4>
                <p>I'm a recently graduated software engineer from the University of Toronto with a passion for creating things.</p>
                <p>I've worked various web development positions as a co-op student and, at these positions, I have been able to apply
                     my attention to detail to my work as well as coordinate with stakeholders to meet their needs.</p>
                <p>As a result of my work, I've developed a passion for web development and am seeking full-stack positions.</p>
                <p>In addition to programming, I also like drawing and playing games!</p>
                <p>Learn more about my experience and my projects down below.</p>
                <div className="my-info">
                    <a href="https://www.linkedin.com/in/anna-liang-873370156/" target="_blank">
                        <img src={linkedin} className="info"/>
                    </a>
                    <a href="https://github.com/anna-liang/" target="_blank">
                        <img src={github} className="info"/>
                    </a>
                    <form action="/portfolio/resume.pdf" target="_blank">
                        <button type="submit" className="btn btn-outline-dark info">
                            Resume
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default About;