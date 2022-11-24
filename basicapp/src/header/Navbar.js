import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="firm">
              Firm
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="colors">
              Colors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="search">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="lifecycle">
              LifyCycle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="users">
              User List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
