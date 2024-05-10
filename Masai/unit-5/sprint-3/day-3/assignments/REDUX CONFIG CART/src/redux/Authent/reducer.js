import React from "react";
import { LOGIN_FAILER, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const init = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: false,
        isError: false
      }  
    }
    case LOGIN_REQUEST: {
        return {
          ...state,
          isAuth: false,
          isLoading: true,
          isError: false
        }  
      }
      case LOGIN_FAILER: {
        return {
          ...state,
          isAuth: false,
          isLoading: false,
          isError: true
        }  
      }
      default:{
        return state
      }
  }
};
