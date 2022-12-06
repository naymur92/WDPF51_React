import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainTemplate() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainTemplate;
