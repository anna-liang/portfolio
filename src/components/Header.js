import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

export const Header = ({ active, onClick }) => (
  <div className="header-container">
    <ul className="header">
      <li className={active[0] ? "selected" : null}>
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          onClick={() => onClick(0)}
        >
          Home
        </Link>
      </li>
      <li className={active[1] ? "selected" : null}>
        <Link to="about" smooth={true} onClick={() => onClick(1)}>
          About
        </Link>
      </li>
      <li className={active[2] ? "selected" : null}>
        <Link to="work" smooth={true} onClick={() => onClick(2)}>
          Work
        </Link>
      </li>
      <li className={active[3] ? "selected" : null}>
        <Link to="projects" smooth={true} onClick={() => onClick(3)}>
          Projects
        </Link>
      </li>
      <li className={active[4] ? "selected" : null}>
        <Link to="contact" smooth={true} onClick={() => onClick(4)}>
          Contact
        </Link>
      </li>
    </ul>
  </div>
);
