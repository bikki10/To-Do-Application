import React, { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My Favourite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
    </>
  );
}

export default FavColor;
