import "./App.css";
import MyComp from "./components/MyComp";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { decrement, increment } from "./redux/slices/counter/counterSlice";

function App() {
  // const count=useAppSelector(s=>s.counter.value)
  const count = useAppSelector((s) => s.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp/>
    </>
  );
}

export default App;
