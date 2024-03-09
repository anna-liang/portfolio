import React from "react";
import movesSmall from "../media/moves.png";
import movesMedium from "../media/moves2x.png";
import movesLarge from "../media/moves4x.png";
import "../styles/Work.css";
import "../styles/Main.css";
import { Work } from "./Work";

export const WorkExperience = () => {
  const allWork = [
    {
      workImageSmall: movesSmall,
      workImageMedium: movesMedium,
      workImageLarge: movesLarge,
      companyName: "moves",
      timeline: "May 2022 - Dec 2023",
      role: "Junior Software Developer | Intermediate Software Developer",
      description:
        "Collaborated closely with product, design, engineering, and QA teams to groom, implement, test, and support new features, creating a seamless integration and optimal user experience. Successfully led initiatives and projects including major front-end re-brandings, consolidating and aggregating thousands of data points from multiple vendors to present an annual view, and introducing both an in-app update and in-app review nudge for the mobile app.",
      tools: [
        "TypeScript",
        "React Native",
        "Redux",
        "Node.js",
        "MongoDB",
        "Amplitude",
      ],
    },
  ];

  return (
    <div className="work-container work">
      <div className="work-subheading-container">
        <h1 className="subheading">Work</h1>
      </div>
      {allWork.map((work) => {
        return (
          <div id={`${work.companyName}-cover`}>
            <Work
              workImageSmall={work.workImageSmall}
              workImageMedium={work.workImageMedium}
              workImageLarge={work.workImageLarge}
              companyName={work.companyName}
              timeline={work.timeline}
              role={work.role}
              description={work.description}
              tools={work.tools}
            />
          </div>
        );
      })}
    </div>
  );
};
