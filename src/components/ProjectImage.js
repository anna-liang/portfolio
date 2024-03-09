import React from "react";
import "../styles/Project.css";

export const ProjectImage = ({ img }) => (
  <div className="project-image-container">
    <img src={img} className="project-image" alt="Project" />
  </div>
);
