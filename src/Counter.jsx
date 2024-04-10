import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // runs after every re-render
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // });

  // runs once, on mount
  // useEffect(() => {
  //   document.title = "My Counter Program";
  // }, []);

  // runs on mount + when value(s) in dependency array changes
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function increment(){
    setCount(c => c + 1);
  }

  function decrement(){
    setCount(c => c - 1);
  }

  function reset(){
    setCount(0);
  }

  function changeColor() {
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <div>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button><br/>
      <button onClick={changeColor}>Change Color</button>
    </div>
    )
}
export default Counter
