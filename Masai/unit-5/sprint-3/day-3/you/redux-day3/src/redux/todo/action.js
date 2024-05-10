import {GET_SUCCESS,POST_SUCCESS,REQUEST,FAILURE,} from "./actionTypes";

export const request = () => {
  return { type: REQUEST };
};
export const failure = () => {
  return { type: FAILURE };
};

export const getSuccess = (payload) => {
  return { type: GET_SUCCESS, payload: payload };
};
export const postSuccess = (payload) => {
  return { type: POST_SUCCESS, payload };
};
