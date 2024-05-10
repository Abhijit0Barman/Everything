import { useState } from "react";
import { store } from "../redux/store";
import {
  addAction,
  dividAction,
  multiyAction,
  reduceAction,
} from "../redux/action";

export const Calculator = () => {
  const [value, setValue] = useState();

  const [render, setRender] = useState(0);
  const { dispatch, getState, subscribe } = store;

  subscribe(() => {
    setRender((prev) => prev + 1);
  });

  const handleAdd = () => {
    if (value) {
      console.log(typeof +value);
      dispatch(addAction(+value));
      setValue("");
    }
  };

  const handleReduce = () => {
    if (value) {
      console.log(typeof +value);
      dispatch(reduceAction(+value));
      setValue("");
    }
  };

  const handleMultiply = () => {
    if (value) {
      console.log(typeof +value);
      dispatch(multiyAction(+value));
      setValue("");
    }
  };

  const handleDivid = () => {
    if (value) {
      console.log(typeof +value);
      dispatch(dividAction(+value));
      setValue("");
    }
  };

  return (
    <div style={{}}>
      <input
        type="number"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Substract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivid}>Divid</button>
    </div>
  );
};
