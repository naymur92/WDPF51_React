import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function Header() {
  const navigate = useNavigate();

  const token = getToken();

  const logOut = () => {
    sessionStorage.clear();
    navigate('/');
  };

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
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {token ? (
          <div className="float-end">
            <Link className="btn btn-primary mx-2" to="admin">
              Admin Page
            </Link>
            <button type="button" onClick={logOut} className="btn btn-danger ">
              Log Out
            </button>
          </div>
        ) : (
          <Link className="btn btn-primary" to="login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
