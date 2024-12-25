import React from 'react';
import './styles.css';

// import { useState } from "react";

function Square({ value }) {
  function handleClick() {
    console.log("Button Clicked");
  }
  // all the function declarations and js code should be written before return , because what ever is in return statement returns the chunk of the code from the function
  return (
    <button className="square" onClick={handleClick}>
      {/* button component ki on click (prop)property will call the function handleClick whenever Clicked */}
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
