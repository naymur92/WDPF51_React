import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminTemplate() {
  return (
    <div>
      <h1>Admin Template</h1>
      <Outlet />
    </div>
  );
}

export default AdminTemplate;
