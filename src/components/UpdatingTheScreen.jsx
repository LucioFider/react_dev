import React, { useState } from "react";

export default function UpdatingTheScreen({ count, onClick }) {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }

  return <button onClick={onClick}>Clicked {count} times</button>;
}
