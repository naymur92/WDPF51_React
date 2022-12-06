import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="preferences">
              Preferences
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
