import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './admin/AdminHome';
import AdminTemplate from './admin/AdminTemplate';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import ServiceComponent from './components/ServiceComponent';
import ShopComponent from './components/ShopComponent';
import DefaultTemplate from './DefaultTemplate/DefaultTemplate';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route index element={<Home />} />
          <Route path="service" element={<ServiceComponent />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path="contact" element={<ContactComponent />} />
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
