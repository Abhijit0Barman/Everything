import React, { useState } from "react";
import { Container } from "../common/container/Container";
import Button from "../common/button/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Count : {count}</h1>
      <div>
        {/* Add 3 buttons for INC, DEC, RESET using Button component */}
        <Button onClick={incrementCount} disabled={count === 10}>
          INC
        </Button>
        <Button onClick={decrementCount} disabled={count === 0}>
          DEC
        </Button>
        <Button onClick={resetCount} disabled={count === 0}>
          RESET
        </Button>
      </div>
    </>
  );
}

export default Counter;
