import React from "react";
const myInfo = React.createElement("h2", {}, "This is my first react App");

var x = "This is a line";
var flowers = ["Water Lily", "Rose", "Lily", "Belly"];
const grettings = () => {
  return "Good Afternoon";
};

const person = {
  name: "Naymur",
  age: 30,
  address: "Chuadanga",
};

const input_element = <input type="text" placeholder="Enter your name" />;

export { myInfo, x, flowers, grettings, person, input_element };
