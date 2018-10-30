import React from "react";
import "./Navbar.css";

// Component for the Navbar

const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game!</a>
      </li>
        {props.message}
      <li>
        Score: {props.score} | Top Score: {props.highScore}
      </li>
    </ul>
  </nav>
);

export default Navbar;
