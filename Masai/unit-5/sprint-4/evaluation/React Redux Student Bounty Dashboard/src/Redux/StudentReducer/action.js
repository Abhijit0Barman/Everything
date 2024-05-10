import axios from "axios";
import {
  STUDENT_REQUEST_FAILURE,
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

export const getStudents = (paramObj) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,
      paramObj
    )
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: STUDENT_REQUEST_FAILURE }));
};

export const getSingle = (id, setStudent) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST_PENDING });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students/${id}`
    )
    .then((res) => {
      // console.log(res.data);
      setStudent(res.data);
    })
  .catch(() => dispatch({ type: STUDENT_REQUEST_FAILURE }));
};
