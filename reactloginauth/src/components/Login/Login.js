import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function Login() {
  const navigate = useNavigate();

  const token = getToken();

  const authenticate = () => {
    if (token) {
      navigate('/admin');
    }
  };

  useEffect(() => {
    authenticate();
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get('http://localhost/wdpf51_React/reactloginauth/api/login.php', {
        params: { email, password },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          // const token = { token: res.data.msg };
          setToken({ token: res.data.msg });
          navigate('/admin');
        }
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Login Page</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  <strong>Email:</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <input type="submit" className="btn btn-success my-2" value="Login" />
            </form>
          </div>
          <div className="card-footer">
            <span className="text-danger">Not Registered?</span>
            <Link to="/register" className="btn btn-outline-warning float-end">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
