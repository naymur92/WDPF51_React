import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function AdminTemplate() {
  const navigate = useNavigate();

  const token = getToken();

  const authenticate = () => {
    if (!token) {
      navigate('/login');
    }
  };

  useEffect(() => {
    authenticate();
  });

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}

export default AdminTemplate;
