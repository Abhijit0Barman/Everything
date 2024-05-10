import { getAuthValue, saveAuthValue } from "../../utils/saveLocalstorage";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  // isAuth: false,
  isAuth: getAuthValue() || false,
  token: null,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGIN_SUCCESS: {
      saveAuthValue(true)
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
      };
    }
    default: {
      return state;
    }
  }
};
