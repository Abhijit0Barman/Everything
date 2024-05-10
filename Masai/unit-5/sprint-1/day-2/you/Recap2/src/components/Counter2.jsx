import React, { useState } from "react";

const initialState = {
  counter: 0,
  todo: [],
};

export const Counter2 = () => {
  const [count, setCount] = useState(initialState);

  const handleReduce = () => {
    setCount((p) => {
      return { ...p, counter: p.counter - 1 };
    });
  };

  return (
    <div>
      <h2>Counter2: {count.counter}</h2>
      <button
        onClick={() => setCount((p) => ({ ...p, counter: p.counter + 1 }))}>
        Add
      </button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};