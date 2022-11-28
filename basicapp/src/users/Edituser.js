import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Edituser(props) {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: props.list.name,
    email: props.list.email,
    password: props.list.password,
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
      // console.log(props.list.id);
      event.persist();
      axios
        .post(`http://localhost/wdpf51_React/basicapp/api/editusers.php`, {
          username: userInfo.name,
          useremail: userInfo.email,
          userpass: userInfo.password,
          userids: props.list.id,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.success) {
            alert(res.data.msg);
            navigate(`/users`);
          }
        });
    } catch (error) {
      // throw error;
    }
  };

  return (
    <form className="editForm" onSubmit={submitUser}>
      <h2> Edit Form </h2>
      <label htmlFor="_name">Name</label>
      <input
        type="text"
        id="_name"
        name="name"
        className="form-control"
        value={userInfo.name}
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
        value={userInfo.email}
        onChange={onChangeValue}
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <br />
      <label htmlFor="_email">Password</label>
      <input
        type="password"
        id="_password"
        name="password"
        className="form-control"
        value={userInfo.password}
        onChange={onChangeValue}
        placeholder="Enter password"
        autoComplete="off"
        required
      />
      <br />
      <input type="submit" value="UPDATE" className="btn btn-success" />
      <Link to="/users" className="btn btn-outline-info pull-right">
        Go Back
      </Link>
    </form>
  );
}

export default Edituser;
