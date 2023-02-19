import axios from "axios";
import React, { useState } from "react";

function UploadFile() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    name: "",
  });
  const [file, setFile] = useState([]);

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSelectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const createUser = async (file, userData) => {
    const formData = new FormData();
    formData.append("thumb", file);
    formData.append('userinfo', JSON.stringify(userData));

    return await axios.post(
      "http://localhost/wdpf51_React/reactjs_axios_fileupload/api/create_user.php",
      formData,
      { headers: { "content-type": "multipart/form-data" } }
    );
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await createUser(file, userInfo);

    alert(res.data.msg);

  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-warning">
              <h3 className="text-center">Upload Form</h3>
            </div>
            <form onSubmit={onSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="">
                    <strong>UserName:</strong>
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <strong>Name:</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <strong>Select Image:</strong>
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={onSelectFile}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-footer">
                <input
                  type="submit"
                  name="submit"
                  value="SUBMIT"
                  className="btn btn-warning float-end my-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
