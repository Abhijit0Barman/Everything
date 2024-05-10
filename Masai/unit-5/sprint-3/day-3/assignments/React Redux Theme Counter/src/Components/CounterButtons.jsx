import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch=useDispatch()

  const AddHandler=()=>{
    dispatch(handleAdd(1))
  }

  const ReduceHandler=()=>{
    dispatch(handleReduce(1))
  }


  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={AddHandler} >ADD</button>
      <button data-testid="reduceButton" onClick={ReduceHandler} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;