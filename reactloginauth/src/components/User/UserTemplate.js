import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

function UserTemplate() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('logininfo')));

  const authenticate = () => {
    if (loginInfo?.status !== 'loggedin') {
      navigate('/login');
    } else if (loginInfo?.usertype === 'admin') {
      navigate('/admin');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" to="bookings">
                  Bookings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="wishlists">
                  Wishlists
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserTemplate;
