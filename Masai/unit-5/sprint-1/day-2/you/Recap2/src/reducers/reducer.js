export const initialState = {
  counter: 0,
  todo: [],
};
/*
  export const reducer = (state=initialState, action) => {
  ⭐⭐⭐ this is 'not-possible incase of useReducer' 
  "But its possible in REDUX" ⭐⭐⭐⭐⭐
*/

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + action.payload };
    case "REDUCE":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
