import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [isuser, setuser] = useState([]);
  const alluser = async () => {
    try {
      axios.get(`http://localhost/wdpf51_React/basicapp/api/users.php`).then((res) => {
        // console.log(res.data.userlist.userdata);
        setuser(res.data.userlist.userdata);
      });
    } catch (error) {
      // throw error;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);

  const deleteUser = async (id) => {
    try {
      axios
        .post(`http://localhost/wdpf51_React/basicapp/api/deleteusers.php`, {
          userids: id,
        })
        .then((res) => {
          console.log(res.data);
          setuser([]);
          alluser();
        });
    } catch (error) {
      // throw error;
    }
  };

  const deleteConfirm = (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure?')) {
      deleteUser(id);
    }
  };

  return (
    <div className="col-sm-8">
      <Link to="insert" className="btn btn-warning my-2">
        {' '}
        Create New User{' '}
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isuser.map((item, index) => (
            <tr className="list" key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`edit/${item.id}`} className="btn btn-outline-primary">
                  {' '}
                  Edit{' '}
                </Link>
                <span
                  onClick={() => deleteConfirm(item.id)}
                  className="btn btn-outline-danger mx-2"
                  role="button"
                  tabIndex="0"
                >
                  {' '}
                  Delete{' '}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
