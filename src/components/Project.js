import React from 'react';
import '../styles/Project.css';
import python from '../media/python.png';
import github from '../media/github.png';
import golang from '../media/golang.png';
import mongo from '../media/mongo.png';
import node from '../media/node.png';
import react from '../media/react.png';

function Project(props) {
    return (
        <div className={(props.justify ? 'project-container-right' : 'project-container-left')}>
            <div className={(props.justify ? 'project-right' : 'project-left')}>
                <img src={props.img} className={(props.justify ? 'project-image-right' : 'project-image-left')} alt="Project"/>
            </div>
            <div className="project-contents">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-desc">{props.desc}</p>
                <div className="project-tools">
                    <img src={python} className={(props.python ? 'show' : 'hidden')} alt="Python logo"/>
                    <img src={golang} className={(props.golang ? 'show' : 'hidden')} alt="Golang logo"/>
                    <img src={node} className={(props.node ? 'show' : 'hidden')} alt="NodeJS logo"/>
                    <img src={mongo} className={(props.mongo ? 'show-long' : 'hidden')} alt="MongoDB logo"/>
                    <img src={react} className={(props.react ? 'show' : 'hidden')} alt="ReactJS logo"/>
                </div>
                <div className="project-links">
                    <a href={props.github}><img src={github} alt="Github logo" className="logo"/></a>
                    <form action={props.app}>
                        <button type="button" className="btn btn-outline-dark">
                            View App
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Project;