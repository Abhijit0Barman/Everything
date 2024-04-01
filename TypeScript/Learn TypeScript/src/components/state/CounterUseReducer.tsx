import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

// type CounterAction = {
//   // type: string;
//   type: "increment" | "decrement" | "reset";
//   // payload?: any;
//   payload?: number;
// };

type CounterAction = UpdateAction | ResetAction; //this is call "Discriminated unions" & its recomended approach for typing reducer function

const initialState = { count: 0 };

// function reducer(state: CounterState, action: { type: string; payload: number }) {
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + action.payload };
    }
    case "decrement": {
      return { ...state, count: state.count - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count: {state.count}</h2>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 1000 })}>
        Increment
      </button>{" "}
      <button onClick={() => dispatch({ type: "decrement", payload: 100 })}>
        Decrement
      </button>{" "}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
