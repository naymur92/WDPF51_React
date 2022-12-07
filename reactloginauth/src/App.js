import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AdminTemplate from './components/Admin/AdminTemplate';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Preferences from './components/Admin/Preferences/Preferences';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Login from './components/Login/Login';
import MainTemplate from './components/MainTemplate';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route index element={<Dashboard />} />
            <Route path="preferences" element={<Preferences />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
