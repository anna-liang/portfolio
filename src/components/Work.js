import React from "react";
import "../styles/Work.css";
import "../styles/Main.css";
import { Tool } from "./Tool";

export const Work = ({
  workImageSmall,
  workImageMedium,
  workImageLarge,
  companyName,
  timeline,
  role,
  description,
  tools,
}) => (
  <div>
    <div className="work-cover-container">
      <img
        id="work-cover"
        src={workImageLarge}
        alt="cover"
        srcSet={`${workImageSmall} 256w, ${workImageMedium} 512w, ${workImageLarge} 1024w`}
      />
    </div>
    <div className="work-info">
      <h1 className="company-name">
        {companyName.charAt(0).toUpperCase() + companyName.slice(1)}
      </h1>
      <p className="timeline">{timeline}</p>
      <p className="role">{role}</p>
      <p className="role-description">{description}</p>
      <div className="tools">
        {tools.map((tool) => (
          <div className="tool-container">
            <Tool name={tool} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
