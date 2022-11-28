import React from 'react';

const myInfo = React.createElement('h2', {}, 'This is my first react App');

const x = 'This is a line';
const flowers = ['Water Lily', 'Rose', 'Lily', 'Belly'];
const grettings = () => 'Good Afternoon';

const person = {
  name: 'Naymur',
  age: 30,
  address: 'Chuadanga',
};

const inputElement = <input type="text" placeholder="Enter your name" />;

export { myInfo, x, flowers, grettings, person, inputElement };
