import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutComponent from './components/AboutComponent';
import Colors from './components/Colors/Colors';
import ContactComponent from './components/ContactComponent';
import FirmComponent from './components/FirmComponent';
import HomeComponent from './components/homeComponent/HomeComponent';
import LifeCycle from './components/LifeCycle/LifeCycle';
import ProductComponent from './components/productComponent/ProductComponent';
import ProductEdit from './components/productComponent/ProductEdit';
import ProductInsert from './components/productComponent/ProductInsert';
import Search from './components/Search/Search';
import './index.css';
import ModalComponent from './pages/ModalComponent';
import reportWebVitals from './reportWebVitals';
import Edit from './users/Edit';
import Insert from './users/Insert';
import UserList from './users/UserList';

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeComponent />} />
          <Route path="products" element={<ProductComponent />} />
          <Route path="product/insert" element={<ProductInsert />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="firm" element={<FirmComponent />} />
          <Route path="colors" element={<Colors />} />
          <Route path="search" element={<Search />} />
          <Route path="lifecycle" element={<LifeCycle />} />
          <Route path="users" element={<UserList />} />
          <Route path="modal" element={<ModalComponent />} />
          <Route path="users/insert" element={<Insert />} />
          <Route path="users/edit/:ids" element={<Edit />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
