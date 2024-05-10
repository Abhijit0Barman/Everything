import {ADD,FAILURE,GET_SUCCESS,POST_SUCCESS,REQUEST,REDUCE,} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD: {
      return { ...state, counter: state.counter + payload };
    }
    case REDUCE: {
      return { ...state, counter: state.counter - payload };
    }
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
      return { ...state, isLoading: false, todo: [...state.todo, payload] };
    }
    default: {
      return state;
    }
  }
};
