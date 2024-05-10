import React, { useState } from "react";

export const Counter1 = () => {
  const state = useState(0);
  const count = state[0];
  const setCount = state[1];

  return (
    <div>
      <h2>Counter1: {count}</h2>
      <button onClick={() => setCount((p) => p + 1)}>Add</button>
    </div>
  );
};
