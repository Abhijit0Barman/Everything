import React, { useState, useEffect } from "react";

function App() {
  const initialCounter = parseInt(localStorage.getItem("counter") || "0");
  const [counter, setCounter] = useState<number>(initialCounter);

  useEffect(() => {
    if (typeof counter === "number") {
      localStorage.setItem("counter", counter.toString());
    }
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const incrementFive = () => {
    setCounter(counter + 5);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const decrementFive = () => {
    setCounter(counter - 5);
  };

  return (
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={decrement}>
        Decrement
      </button>
      <button data-testid="increment5" onClick={incrementFive}>
        Increment 5 times
      </button>
      <button data-testid="decrement5" onClick={decrementFive}>
        Decrement 5 times
      </button>
    </div>
  );
}

export default App;