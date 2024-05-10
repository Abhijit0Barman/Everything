import axios from "axios";
import { GET_SUCCESS, POST_SUCCESS, REQUEST, FAILURE } from "./actionTypes";

export const getTodos = (dispatch) => {
  // I can't import "useDispatch()" in "jsx" file, So I have to pass the "dispatch" from,  where is this function is getting called.
  //  useDispatch only support in "hooks & custom-hooks" | Not in "js" file.
  dispatch({ type: REQUEST });
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILURE });
    });
};

export const addTodo = (dispatch, title, setRender) => {
  dispatch({ type: REQUEST });
  axios
    .post("http://localhost:8080/todos", { title: title, status: false })
    .then((res) => {
      dispatch({ type: POST_SUCCESS, payload: res.data });
      // dispatch({ type: POST_SUCCESS });
      // setRender((p) => {
      //   console.log(`setRender is getting executed`);
      //   return !p;
      // });
      //⭐⭐in pagination single-user not work.
      // you have to use multi-user approach(which is "after post-request -> make get-request")
    })
    .catch((err) => {
      dispatch({ type: FAILURE });
    });
};
