import React, { Component, Fragment } from 'react'
import '../styles/Project.css'

function Project(props) {
    return (
        <div class={(props.justify ? 'project-right' : 'project-left')}>
            <img src={props.img} class="project-image"></img>
            <h3 class="project-title">{props.title}</h3>
            <p class="project-desc">{props.desc}</p>
            <div class="project-tools">
                <a class={(props.python ? 'show' : 'hidden')}></a>
                <a class={(props.go ? 'show' : 'hidden')}></a>
                <a class={(props.node ? 'show' : 'hidden')}></a>
                <a class={(props.express ? 'show' : 'hidden')}></a>
                <a class={(props.mongo ? 'show' : 'hidden')}></a>
                <a class={(props.react ? 'show' : 'hidden')}></a>
            </div>
            <div class="project-links">
                <a href={props.github}></a>
                <a href={props.app}></a>
            </div>
        </div>
    )
}

export default Project;