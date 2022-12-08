import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handelChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const userRegistration = async (e) => {
    e.preventDefault();
    // console.log(userInfo);

    await axios
      .post('http://localhost/wdpf51_React/reactloginauth/api/register.php', userInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          navigate('/login');
        }
        alert(res.data.msg);
      });
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Registration Form</h3>
          </div>
          <div className="card-body">
            <form onSubmit={userRegistration}>
              <div className="form-group">
                <label htmlFor="fname">
                  <strong>Frist Name:</strong>
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  onChange={handelChange}
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">
                  <strong>Last Name:</strong>
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={handelChange}
                  className="form-control"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <strong>Email:</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handelChange}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  onChange={handelChange}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <input type="submit" className="btn btn-success my-2" value="Registration" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
