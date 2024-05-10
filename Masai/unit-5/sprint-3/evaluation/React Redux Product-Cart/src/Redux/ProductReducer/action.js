import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

export const getProducts = () => (dispatch) => {
  // Complete get products functionality here
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    .then((res) => dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_PRODUCT_FAILURE }));
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
