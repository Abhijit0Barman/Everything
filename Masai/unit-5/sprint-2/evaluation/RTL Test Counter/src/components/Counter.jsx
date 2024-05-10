import React, { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> {count}</h1>
      <Button>Add</Button>
      <Button>Reduce</Button>
    </div>
  );
};
