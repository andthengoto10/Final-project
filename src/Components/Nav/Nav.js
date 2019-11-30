import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="sidebarContainer">
      <input type="checkbox" id="menyAvPaa" />
      <label htmlFor="menyAvPaa" id="burger">
        <div />
        <div />
        <div />
      </label>
      <nav id="meny">
        <ul>
          <li>
            <Link to="/">
              <i>Monitor</i>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i>Profile</i>
            </Link>
          </li>
          <li>
            <Link to="/members">
              <i>Members</i>
            </Link>
          </li>
          <li>
            <Link to="/report">
              <i>Report</i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
