import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      axios
        .post(`http://localhost/wdpf51_React/basicapp/api/addusers.php`, {
          username: userInfo.name,
          useremail: userInfo.email,
          userpass: userInfo.password,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/users`);
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="col-sm-8">
      <form className="insertForm" onSubmit={submitUser}>
        <h2> Add Form </h2>
        <label htmlFor="_name">Name</label>
        <input
          type="text"
          id="_name"
          name="name"
          className="form-control"
          onChange={onChangeValue}
          placeholder="Enter name"
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="_email">Email</label>
        <input
          type="email"
          id="_email"
          name="email"
          className="form-control"
          onChange={onChangeValue}
          placeholder="Enter email"
          autoComplete="off"
          required
        />
        <br />
        <input
          type="password"
          id="_password"
          name="password"
          className="form-control"
          onChange={onChangeValue}
          placeholder="Enter Password"
          autoComplete="off"
          required
        />
        <br />
        <input type="submit" className="btn btn-primary" value="Insert" />
      </form>
      <br />
      <Link to="/users" className="btn btn-outline-warning my-3">
        Back
      </Link>
    </div>
  );
};

export default Insert;
