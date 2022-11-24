import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./pages/homeComponent/HomeComponent";
import ProductComponent from "./pages/productComponent/ProductComponent";
import AboutComponent from "./pages/AboutComponent";
import ContactComponent from "./pages/ContactComponent";
import FirmComponent from "./pages/FirmComponent";
import Colors from "./components/Colors/Colors";
import Search from "./components/Search/Search";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import UserList from "./users/UserList";
import Insert from "./users/Insert";
import Edit from "./users/Edit";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeComponent />} />
          <Route path="products" element={<ProductComponent />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="firm" element={<FirmComponent />} />
          <Route path="colors" element={<Colors />} />
          <Route path="search" element={<Search />} />
          <Route path="lifecycle" element={<LifeCycle />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/insert" element={<Insert />} />
          <Route path="users/edit/:ids" element={<Edit />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
