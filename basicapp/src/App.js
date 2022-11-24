import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./header/Navbar";
import { Sidebar } from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header brand="Honey Link" slogan="Committed To Quality" />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />

          <Outlet />
        </div>
      </div>
      <Footer brand="HoneyLink" />
    </div>
  );
}

export default App;
