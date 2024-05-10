//Write the ActionCreator functions here

// action.js for AuthReducer
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

// Action creator for login request
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Action creator for successful login
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

// Action creator for login failure
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
