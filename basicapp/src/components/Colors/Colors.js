import React, { useState } from 'react';

function Colors() {
  const [color, setColor] = useState('maroon');

  function changeColor(props) {
    if (props === undefined) {
      setColor('maroon');
    } else {
      setColor(props);
    }
  }

  return (
    <div className="col-sm-8">
      <h2>
        My favorite color is <strong>{color}</strong>!
      </h2>

      <button className="btn btn-danger mx-2" onClick={() => setColor('red')}>
        red
      </button>
      <button className="btn btn-primary mx-2" onClick={() => setColor('green')}>
        green
      </button>
      <button className="btn btn-warning mx-2" onClick={() => setColor('yellow')}>
        yellow
      </button>
      <button className="btn btn-info mx-2" onClick={() => changeColor()}>
        Reset
      </button>
    </div>
  );
}

export default Colors;
