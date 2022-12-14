import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Insert() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const onChangeValue = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    event.preventDefault();
    event.persist();
    try {
      axios
        .post(`http://localhost/wdpf51_React/basicapp/api/addusers.php`, {
          info,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/users`);
        });
    } catch (error) {
      // throw error;
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
        <Link to="/users" className="btn btn-outline-warning pull-right">
          Back
        </Link>
      </form>
    </div>
  );
}

export default Insert;
