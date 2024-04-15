import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "../actionTypes";

export const addProduct = (newProduct) => (dispatch) => {
  // console.log(dispatch);
  dispatch({ type: PRODUCT_REQUEST }); 
  axios
    .post("https://localhost:8080/products", newProduct)
    .then((res) => dispatch({ type: PRODUCT_SUCCESS }))
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

export const getProduct = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("https://localhost:8080/products")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};
