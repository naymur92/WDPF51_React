import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(JSON.parse(sessionStorage.getItem('logininfo')));

  const authenticate = () => {
    if (loginInfo?.usertype === 'admin') {
      navigate('/admin');
    } else if (loginInfo?.usertype === 'user') {
      navigate('/user');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get('http://localhost/wdpf51_React/reactloginauth/api/login.php', {
        params: { email, password },
      })
      .then((res) => {
        // console.log(res.data.logininfo);
        if (res.data.success) {
          sessionStorage.setItem('logininfo', JSON.stringify(res.data.logininfo));
          if (res.data.logininfo.usertype === 'admin') {
            navigate('/admin');
          } else {
            navigate('/user');
          }
        }
      });
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Login Form</h3>
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
