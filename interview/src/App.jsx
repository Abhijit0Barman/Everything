import "./App.css";
// import Timer from "./Components/Timer";
// import UseEffect from "./Hooks/UseEffect";
// import UseState from "./Hooks/UseState";
import Avatar from "./Demo/Avatar";
import Demo from "./Demo/Demo";

function App() {
  let val = 0

  const handleClick = () => {
    val++
    console.log(val);
  }
  return (
    <>
      {/* <Timer />
      <p>
        <UseState />
      </p>
      <p>
        <UseEffect />
      </p> */}
      {/* <Demo/> */}
      {/* <Avatar/> */}
      <button onClick={handleClick}>value: {val}</button>
    </>
  );
}

export default App;
