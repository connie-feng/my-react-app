import React, { useState, useEffect } from 'react';

function Window() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // adds thousands of event listeners without useEffect
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    // clean up before next re-render or before unmounting
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
    )
}
export default Window
