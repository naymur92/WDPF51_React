import { useState } from 'react';

export default function ContactComponent() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const formHandle = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(setInputs);
  };
  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header">
          <h2>Contact Page</h2>
        </div>
        <div className="card-body">
          <form onSubmit={formHandle}>
            <div className="form-group">
              <label>
                <strong>Name</strong>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Message</strong>
              </label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Leave your message here"
                onChange={handleChange}
              />
            </div>
            <input type="submit" className="btn btn-success mt-2" value="Send Message" />
            <input type="reset" className="btn btn-danger mt-2 mx-2" />
          </form>
        </div>
      </div>
    </div>
  );
}
