import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="col-sm-4">
      <ul className="nav nav-pills flex-column">
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
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="modal">
            Modal
          </NavLink>
        </li>
      </ul>
      <hr className="d-sm-none" />
    </div>
  );
}
