import React, { useState } from "react";

const transform = (data) => {
  return {
    counter: data,
  };
};

export const Counter5 = ({ propValue = 0 }) => {
  const [count, setCount] = useState(transform(propValue));

  const handleReduce = () => {
    setCount((p) => {
      return { ...p, counter: p.counter - 1 };
    });
  };

  return (
    <div>
      <h2>Counter5: {count.counter}</h2>
      <button
        onClick={() => setCount((p) => ({ ...p, counter: p.counter + 1 }))}>
        Add
      </button>{" "}
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};