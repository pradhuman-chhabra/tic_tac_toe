// import { useState } from 'react';
// value stores the value and setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

// function Square() {
//   const [value, setValue] = useState(null);

function Square({ value }) {
  function handleClick() {
    console.log("Button Clicked");
  }
  // all the function declarations and js code should be written before return , because what ever is in return statement returns the chunk of the code from the function
  // button component ki on click (prop)property will call the function handleClick whenever Clicked 
  return (
    <button className="square" onClick={handleClick}>

      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        {/* ps jahan component use hota hain wohin se prop pass kiya jaata hain */}
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
