import "./App.css";
import Button from "./components/Button";
import RenderingLists from "./components/RenderingLists";
import RespondingToEvents from "./components/RespondingToEvents";
import UpdatingTheScreen from "./components/UpdatingTheScreen";

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button />
      <RenderingLists />
      <RespondingToEvents />
      <UpdatingTheScreen />
      <UpdatingTheScreen />
    </div>
  );
}

export default App;
