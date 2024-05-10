import { useState } from "react";
import { store } from "../redux/store";
import { addAction, reduceAction } from "../redux/action";

export const Counter = () => {
  const [render, setRender] = useState(true); //HACK
  // const [render, setRender] = useState(0); //HACK
  const { dispatch, getState, subscribe } = store; //this are coming from redux

  subscribe(() => {
    //if store change it will trigger & re-render
    // setRender((p) => p + 1);
    setRender(!render);
    console.log(getState().counter);
    console.log(store.getState()); //it will give the initialState that created inside store.js
    console.log(store);
  });

  const handleReduce = () => {
    // dispatch({ type: "REDUCE", payload: 1 })
    dispatch(reduceAction(1));
  };

  const handleAdd = () => {
    // dispatch({ type: "ADD", payload: 1 })
    dispatch(addAction(1));
  };

  return (
    <>
      <div>Counter: {store.getState().counter}</div>
      <div>Counter: {getState().counter}</div>
      <button onClick={handleReduce}>-</button>
      <button onClick={handleAdd}>+</button>
    </>
  );
};
