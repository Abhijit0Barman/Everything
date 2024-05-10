import { ADD, REDUCE } from "./actionTypes";

export const addAction = (payload) => {
  //here you can write your OWN custom logic
  return { type: ADD, payload };
};

export const reduceAction = (payload) => {
  //here you can write your OWN custom logic
  return { type: REDUCE, payload };
};
