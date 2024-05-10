import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  // let l=0
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((p) => p + 1);
  };
  const handleDecre = () => {
    setCount((p) => p - 1);
  };

  return (
    <div className="App">
      <h1>React Testing Library</h1>
      {/* <Button func={()=>console.log(++l)}>Click Me</Button> */}
      {/* <Button>Click Me</Button> */}
      <hr />
      <h3 data-testid="counter">Counter: {count}</h3>
      <Button func={handleAdd}>Click Me</Button>{" "}
      <Button func={handleDecre}>Decrese</Button>
    </div>
  );
}

export default App;
