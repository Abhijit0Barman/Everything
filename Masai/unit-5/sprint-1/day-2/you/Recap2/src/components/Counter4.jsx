import React, { useState } from "react";

export const Counter4 = ({ propValue = 0 }) => {
  const [count, setCount] = useState(() => {
    return {
      counter: propValue,
    };
  });

  const handleReduce = () => {
    setCount((p) => {
      return { ...p, counter: p.counter - 1 };
    });
  };

  return (
    <div>
      <h2>Counter4: {count.counter}</h2>
      <button
        onClick={() => setCount((p) => ({ ...p, counter: p.counter + 1 }))}>
        Add
      </button>{" "}
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};