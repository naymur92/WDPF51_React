import React from "react";

class Student extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      subject: props.subject,
    };
  }
  render() {
    return (
      <div className="student">
        <p>
          <strong>Name: </strong> {this.state.name}
        </p>
        <p>
          <strong>Subject: </strong> {this.state.subject}
        </p>
      </div>
    );
  }
}

export default Student;
