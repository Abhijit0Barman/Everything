import axios from "axios";
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  EDIT_BOOKS_SUCCESS,
} from "./actionTypes";

export const getBooks = (paramObj) => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  axios
    .get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
      paramObj
    )
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_BOOKS_FAILURE }));
};

export const editBook = (id, data) => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  axios
    .patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,
      data
    )
    .then(() => dispatch({ type: EDIT_BOOKS_SUCCESS }))
    .catch(() => dispatch({ type: GET_BOOKS_FAILURE }));
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
