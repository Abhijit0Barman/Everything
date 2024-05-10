import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter=useSelector(store=>store.counterReducer.counter)
  console.log(counter) 
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;