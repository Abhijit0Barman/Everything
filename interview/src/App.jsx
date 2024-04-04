import "./App.css";
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
      <Demo/>
      <Avatar/>
      <button onClick={handleClick}>value: {val}</button>
    </>
  );
}

export default App;
