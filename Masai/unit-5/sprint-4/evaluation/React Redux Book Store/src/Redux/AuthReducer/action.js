import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login = (data) => (dispatch) => {
  // Complete login logic here
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", data)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
    .catch(() => dispatch({ type: LOGIN_FAILURE }));
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
