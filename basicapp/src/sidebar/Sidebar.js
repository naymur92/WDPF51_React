import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
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
      </ul>
      <hr className="d-sm-none" />
    </div>
  );
}
