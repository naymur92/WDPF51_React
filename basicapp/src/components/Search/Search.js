import React from 'react';
import './Search.css';

function Search() {
  // var Term = "";
  const handleChange = (event) => {
    const Term = event.target.value;
  };
  return (
    <div className="Search col-sm-8">
      <h3>Search Page</h3>
      {/* <h4>Search for: {Term}</h4> */}
    </div>
  );
}

export default Search;
