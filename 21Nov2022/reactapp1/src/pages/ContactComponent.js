import { useState } from "react";
export default function ContactComponent() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const formHandle = (event) => {
    event.preventDefault();

    // Output form values
    console.log(inputs);
  };

  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Contact Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={formHandle}>
            <div className="form-group my-3">
              <label>
                <strong>Name</strong>
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-3">
              <label>
                <strong>Email</strong>
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-3">
              <label>
                <strong>Enter Your Message</strong>
              </label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter your message"
                onChange={handleChange}
              ></textarea>
            </div>
            <input
              className="btn btn-success my-2"
              type="submit"
              name="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
