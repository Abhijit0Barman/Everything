import { addAction, reduceAction } from "../redux/counter/action";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counterReducer.counter);

  const handleReduce = () => {
    dispatch(reduceAction(1));
  };

  const handleAdd = () => {
    dispatch(addAction(1));
  };

  console.log(`re-render counter`, counter);

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleReduce}>-</button>{" "}
      <button onClick={handleAdd}>+</button>
    </>
  );
};
