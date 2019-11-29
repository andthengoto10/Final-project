import React from "react";
import { Link } from "react-router-dom";
import "./Nav1.css";

const Nav1 = () => {
  return (
    <div className="sidebarContainer">
      <nav>
        <ul className="nav">
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

export default Nav1;
