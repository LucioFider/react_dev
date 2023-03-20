import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import RenderingLists from "./components/RenderingLists";
import RespondingToEvents from "./components/RespondingToEvents";
import UpdatingTheScreen from "./components/UpdatingTheScreen";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button />
      <RenderingLists />
      <RespondingToEvents />

      <h2>Counters that update together</h2>
      <UpdatingTheScreen count={count} onClick={handleClick} />
      <UpdatingTheScreen count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
