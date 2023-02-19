import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './ModalComponent.css';

export default function ModalComponent() {
  // Modal functions
  const [modal, setModal] = useState({ state: false });
  const toggle = () => {
    setModal({
      state: !modal.state,
    });
  };

  // Form functions
  const [info, setInfo] = useState({});
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);

    axios.post('http://localhost/wdpf51_React/basicapp/api/addusers.php', { info }).then((res) => {
      if (res.data.success) {
        alert(res.data.msg);

        // Close modal after submit
        toggle();
      } else {
        alert(res.data.msg);
      }
    });
  };

  return (
    <div className="col-8">
      <h1>React Bootstrap Modal Example</h1>
      <Button color="danger" onClick={toggle}>
        User Insert (Model)
      </Button>

      <Modal isOpen={modal.state} tabIndex="-1">
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            <span>User Creation</span>
            <Button type="button" className="btn-close bg-warning" onClick={toggle} />
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Password"
                className="form-control"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button onClick={toggle} type="button" className="btn btn-warning">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
