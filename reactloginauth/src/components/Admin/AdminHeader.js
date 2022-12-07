import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="preferences">
              Preferences
            </NavLink>
          </li>
        </ul>
        <div className="float-end">
          <Link to="/" className="btn btn-outline-info mx-2">
            Main Page
          </Link>
          <button type="button" onClick={logOut} className="btn btn-danger">
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
