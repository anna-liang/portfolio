import React from "react";
import "../styles/Project.css";
import "../styles/Main.css";
import githubImg from "../media/github.png";
import { ProjectImage } from "./ProjectImage";
import { Tool } from "./Tool";

export const Project = ({ img, title, desc, github, app, tools }) => (
  <div className="project-container">
    <ProjectImage img={img} />
    <div className="project-contents">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="project-tools">
        {tools.map((tool) => (
          <div className="project-tool-container" key={tool}>
            <Tool name={tool} />
          </div>
        ))}
      </div>
      <div className="project-links">
        <a href={github}>
          <img src={githubImg} alt="Github logo" className="logo" />
        </a>
        <form
          action={app}
          className={app ? "show-long" : "hidden"}
          target="_blank"
        >
          <input
            type="submit"
            className="btn btn-outline-dark"
            value="View App"
          />
        </form>
      </div>
    </div>
  </div>
);
