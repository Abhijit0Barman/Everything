import { NET_FAILURE, NET_REQUEST, NET_SUCCESS } from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  token: "",
  errorMessage: "",
  isAuth: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NET_REQUEST:
      return { ...state, isLoading: true };
    case NET_SUCCESS:
      return { ...state, token: payload, isLoading: false, isAuth: true };
    case NET_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
