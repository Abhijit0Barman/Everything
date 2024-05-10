import React, { useState } from "react";
import { store } from "../Redux/store";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const { dispatch, subscribe, getState } = store;

  const handleAdd = () => {
    dispatch(handleAddActionObj(1));
  };

  const handleReduce = () => {
    dispatch(handleReduceActionObj(1));
  };

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAdd}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={handleReduce}>
        REDUCE
      </button>
    </div>
  );
};
export default CounterButtons;
