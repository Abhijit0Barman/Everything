import React, { useState } from "react";

const transform = () => {
  return {
    counter: 0,
  };
};

export const Counter6 = () => {
  const [count, setCount] = useState(transform);
  //in useState "function got call automatically and it return value"

  const handleReduce = () => {
    setCount((p) => {
      return { ...p, counter: p.counter - 1 };
    });
  };

  return (
    <div>
      <h2>Counter6: {count.counter}</h2>
      <button
        onClick={() => setCount((p) => ({ ...p, counter: p.counter + 1 }))}>
        Add
      </button>{" "}
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
