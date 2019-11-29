import React from "react";
import { Link } from "react-router-dom";
import "./Nav1.css";

const Nav1 = () => {
  return (
    <div className="sidebarContainer">
      <input type="checkbox" id="menyAvPaa" />
      <label id="burger" htmlFor="menyAvPaa">
        <div />
        <div />
        <div />
      </label>
      <nav id="meny">
        <ul classname="nav">
          <li>
            <Link to="/">
              <i>Monitor</i>
            </Link>
          </li>
          <li>
            <Link to="/profile" />
            <i>Profile</i>
          </li>
          <li>
            <Link to="/members" />
            <i>Members</i>
          </li>
          <li>
            <Link to="/report" />
            <i>Report</i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav1;
