import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Monitor</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
