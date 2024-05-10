import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };

    default:
      return state;
  }
};
