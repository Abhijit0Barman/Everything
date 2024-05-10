//Write the ActionCreator functions here

// action.js for AppReducer
import {
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
  GET_WATCHES_DATA_FAILURE,
} from "./actionTypes";

// Action creator for fetching watch data request
export const getWatchesDataRequest = () => ({
  type: GET_WATCHES_DATA_REQUEST,
});

// Action creator for successful watch data retrieval
export const getWatchesDataSuccess = (data) => ({
  type: GET_WATCHES_DATA_SUCCESS,
  payload: data,
});

// Action creator for watch data retrieval failure
export const getWatchesDataFailure = () => ({
  type: GET_WATCHES_DATA_FAILURE,
});
