import React from "react";

export default function RespondingToEvents() {
  // function handleClick() {
  //   alert("You clicked me!");
  // }

  const handleClick = () => {
    alert("You clicked me");
  };

  return <button onClick={handleClick}>Click me</button>;
}
