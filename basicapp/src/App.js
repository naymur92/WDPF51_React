import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Navbar } from "./header/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import { HomeComponent } from "./pages/homeComponent/HomeComponent";
import { AboutComponent } from "./pages/AboutComponent";

function App() {
  return (
    <div className="App">
      <Header brand="Honey Link" slogan="Committed To Quality" />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<HomeComponent />} />
                {/* <Route path="products" element={<Blogs />} /> */}
                <Route path="about" element={<AboutComponent />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <Footer brand="HoneyLink" />
    </div>
  );
}

export default App;
