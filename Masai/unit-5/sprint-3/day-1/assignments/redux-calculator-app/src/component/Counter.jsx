import { useState } from "react";
import { store } from "../redux/store";
import { addAction, reduceAction } from "../redux/action";

export const Counter = () => {
  const [render, setRender] = useState(0);
  const { dispatch, getState, subscribe } = store;

  subscribe(() => {
    setRender((prev) => prev + 1);
  });

  const handleAdd = () => {
    dispatch(addAction(1));
  };

  const handleReduce = () => {
    dispatch(reduceAction(1));
  };
  return (
    <div>
      {!Number.isInteger(getState().counter) ? (
        <h1 style={{ border: "1px solid black", width: "20%", margin: "auto" }}>
          counter:{getState().counter.toFixed(2)}
        </h1>
      ) : (
        <h1 style={{ border: "1px solid black", width: "20%", margin: "auto" }}>
          counter:{getState().counter}
        </h1>
      )}
      {/* <h1 style={{border:"1px solid black", width:"20%", margin:"auto"}}>counter:{getState().counter.toFixed(2)}</h1> */}
      <br />
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleReduce}>Decrement</button>
    </div>
  );
};
