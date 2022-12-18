import axios from "axios";
import React, { useState } from "react";

export default function FileUploadForm () {
  const UPLOAD_ENDPOINT = "http://localhost/wdpf51_React/reactjs_axios_fileupload/api/upload.php";
  const [state, setState] = useState([]);
 
  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await uploadFile(state.file);
    console.log(res.data);
  }
  const onChange = (e) => {
    setState({ file: e.target.files[0] });
    // console.log(state);
  }
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  return (
    <div className="container" style={{ padding: 20 }}>
      <h1> ReactJS Axios and PHP Mysql File Upload - Axios Post </h1>
      <div className="row">
        <form onSubmit={onSubmit} className="form-inline">
          <div className="form-group">
            <label>Choose File to Upload: </label>
            <input
              type="file"
              className="form-control"
              onChange={onChange}
            />
          </div>{" "}
          <br />
          <button type="submit" className="btn btn-success">
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
}
