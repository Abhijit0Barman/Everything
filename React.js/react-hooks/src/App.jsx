import "./App.css";
import Timer from "./Components/Timer";
import UseEffect from "./Hooks/UseEffect";
import UseState from "./Hooks/UseState";


function App() {

  return (
    <>
      <Timer />
      <p>
        <UseState />
      </p>
      <p>
        <UseEffect />
      </p>
    </>
  );
}

export default App;
