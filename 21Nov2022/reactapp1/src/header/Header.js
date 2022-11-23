import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.props = props;
  }

  render() {
    return (
      <div className="p-5 bg-primary text-white text-center">
        <h1>{this.props.brand}</h1>
        <p>{this.props.slogan}</p>
      </div>
    );
  }
}

// function Header(props) {
//   return (
//     <div className="p-5 bg-primary text-white text-center">
//       <h1>{props.brand}</h1>
//       <p>{props.slogan}</p>
//     </div>
//   );
// }

export default Header;
