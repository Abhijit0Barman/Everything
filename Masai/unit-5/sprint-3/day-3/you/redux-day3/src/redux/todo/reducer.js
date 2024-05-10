import { FAILURE, GET_SUCCESS, POST_SUCCESS, REQUEST } from "./actionTypes";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST: {
      return { ...state, isLoading: true };
    }
    case FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_SUCCESS: {
      return { ...state, isLoading: false, todo: payload };
    }
    case POST_SUCCESS: {
      return { ...state, isLoading: false, todo: [...state.todo, payload] };//⭐⭐
    }
    default: {
      return state;
    }
  }
};
