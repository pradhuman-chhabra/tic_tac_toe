import { useState } from 'react';
// value stores the value and setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

// Button jab click hoga toh onClick method se handleclick Funtion call hoga, handClcik will set the the value to X for "value" variable
// Yeh Value naam ka ek variable declare kiya hai jo useState hook use karta hain, us hook se click hone pe "value" ki value X set ho jaati hain
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  // all the function declarations and js code should be written before return , because what ever is in return statement returns the chunk of the code from the function
  // button component ki on click (prop)property will call the function handleClick whenever Clicked 
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

// function Square({ value }) {
//   function handleClick() {
//     console.log("Button Clicked");
//   }
//   // all the function declarations and js code should be written before return , because what ever is in return statement returns the chunk of the code from the function
//   // button component ki on click (prop)property will call the function handleClick whenever Clicked 
//   return (
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   );
// }

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        {/* ps jahan component use hota hain wohin se prop pass kiya jaata hain */}
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
