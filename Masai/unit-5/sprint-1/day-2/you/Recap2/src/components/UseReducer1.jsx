import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
/*
const initialState = {
  counter: 0,
  todo: [],
};

const reducer = (a, b) => {
  console.log(a);//1st parameter is "state"
  console.log(b);//2nd parameter is "action | type | passingValue"
  return "return value saved inside STATE"
};

export const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, "initialValue");

  // console.log(dispatch);

  const handleReduce = () => {
    dispatch("passingValue");
  };

  return (
    <div>
      <h2>UseReducer1: {state}</h2>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

*/
//========================================
/*
const reducer = (state, action) => {
  console.log(action);
  
  //return action === "ADD" ? state + 1 : state - 1; 
  //if write like this there will be action happening even action type is wrong
  
  // if (action === "ADD") {
  //   return state + 1;
  // } else if (action === "REDUCE") {
  //   return state - 1;
  // } else {
  //   // throw new Error("Invalid")
  //   return state;
  // }

  // switch (action[0]) {
  //   case "ADD":
  //     return state + action[1];
  //   case "REDUCE":
  //     return state - action[1];
  //   default:
  //     return state;
  // }
  
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "REDUCE":
      return state - action.payload;
    default:
        return state;
      }
  };
  */
//========================================
export const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  const [state, dispatch] = useReducer(reducer);
  ⭐⭐⭐ this is 'not-possible incase of useReducer' 
  "But its possible in REDUX" ⭐⭐⭐⭐⭐
  */

  // console.log(dispatch); //dispatch is a function
  // const handleAdd = () => {dispatch(["ADD", 1]);};
  // const handleReduce = () => {dispatch(["REDUCE", 2]);};

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 1 });
  };
  const handleReduce = () => {
    dispatch({ type: "REDUCE", payload: 1 });
  };

  return (
    <div>
      <h2>UseReducer1: {state.counter}</h2>
      <button onClick={handleAdd}>Add</button>{" "}
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
