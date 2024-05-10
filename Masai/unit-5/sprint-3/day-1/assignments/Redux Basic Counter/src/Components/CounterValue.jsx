import React, { useState } from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const [render, setRender] = useState(0);
  const { getState, subscribe } = store;

  subscribe(() => {
    setRender((prev) => prev + 1);
    // console.log(getState().counter)
  });

  const counter = getState().counter; //get the counter value from the Redux store
  // console.log(counter)

  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
