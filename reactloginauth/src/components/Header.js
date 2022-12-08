import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('logininfo')));

  useEffect(() => {
    setLoginInfo(JSON.parse(sessionStorage.getItem('logininfo')));
  }, []);

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

        <div className="float-end">
          {loginInfo?.status === 'loggedin' ? (
            <ul className="navbar-nav">
              {loginInfo.usertype === 'user' ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">
                    User Dashboard
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li className="nav-item">
                <button type="button" onClick={logOut} className="btn btn-danger ">
                  Log Out
                </button>
              </li>
            </ul>
          ) : (
            <Link className="btn btn-primary" to="login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
