import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
/*
export const login = (userData) => (dispatch) => {
  //you have to use function currying here. 
  //the reason is in the thunk middleware its expect a async-function.
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }); 
      console.log(res.data);
      //we don't need to create extra function which return object, we can directly write object which has (type || payload)
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};
*/
export function login(userData) {
  return function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post("https://reqres.in/api/login", userData)
      .then(function (res) {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        console.log(res.data);
      })
      .catch(function (err) {
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
      });
  };
}
