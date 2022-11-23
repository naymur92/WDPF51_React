import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./header/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import HomeComponent from "./pages/homeComponent/HomeComponent";
import AboutComponent from "./pages/AboutComponent";
import ProductComponent from "./pages/productComponent/ProductComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header brand="Honey Link" slogan="Committed To Quality" />
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <Sidebar />

            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/products" element={<ProductComponent />} />
            </Routes>
          </div>
        </div>
        <Footer brand="HoneyLink" />
      </div>
    </BrowserRouter>
  );
}

export default App;
