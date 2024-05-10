import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });  // console.log(dispatch);
  axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      console.log(res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};
