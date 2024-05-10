import React, { useState } from "react";

let serverData = -1;

export const Counter3 = ({ propValue }) => {
  const [count, setCount] = useState(propValue || serverData || 0);

  const handleReduce = () => {
    setCount((p) => {
      return p - 1;
    });
  };

  return (
    <div>
      <h2>Counter3: {count}</h2>
      <button onClick={() => setCount((p) => p + 1)}>Add</button>
      <br />
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};