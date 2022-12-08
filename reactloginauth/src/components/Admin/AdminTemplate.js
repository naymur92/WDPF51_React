import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import AdminHeader from './AdminHeader';

function AdminTemplate() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('logininfo')));

  const authenticate = () => {
    if (loginInfo?.status !== 'loggedin') {
      navigate('/login');
    } else if (loginInfo?.usertype === 'user') {
      navigate('/user');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminTemplate;
