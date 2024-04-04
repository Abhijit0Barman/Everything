import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialState = {isAuth: false,isLoading: false,isError: false,errorMessage: "",token: "",};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {return { ...state, isLoading: true };}
    case LOGIN_SUCCESS: {return {...state,isLoading: false,isAuth: true,token: payload,};}
    case LOGIN_FAILURE: {return {...state,isLoading: false,isError: true,errorMessage: payload,};}
    default: {return state;}
  }
};
    // case LOGIN_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isAuth: true,
    //     token: payload,
    //     isError: false,
    //     errorMessage: "",
    //   };
    // }
