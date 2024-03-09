import React from "react";
import { Link } from "react-router-dom";
import "../styles/Credits.css";
import "../styles/Main.css";

export const Credits = () => (
  <div className="credits-container">
    <div className="credits-header-container">
      <ul className="credits-header">
        <li>
          <Link to="/portfolio" className="home-link">
            Home
          </Link>
        </li>
      </ul>
    </div>
    <div className="credits">
      <h1 className="subheading">Credits</h1>
      <h3>Assets</h3>
      <ul>
        <li className="credits-item">
          Title background video by{" "}
          <a
            href="https://pixabay.com/users/enchantedstudios-722609/?tab=videos"
            title="EnchantedStudios"
          >
            EnchantedStudios
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com/" title="Pixabay">
            www.pixabay.com
          </a>{" "}
        </li>
        <li className="credits-item">
          Github logo from{" "}
          <a href="https://github.com/logos" title="Github">
            Github
          </a>{" "}
        </li>
        <li className="credits-item">
          LinkedIn logo from{" "}
          <a href="https://brand.linkedin.com/downloads" title="LinkedIn">
            LinkedIn
          </a>{" "}
        </li>
      </ul>
    </div>
  </div>
);
