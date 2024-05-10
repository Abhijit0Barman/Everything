import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  EDIT_BOOK_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  books: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, isLoading: true };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        books: action.payload,
      };
    case GET_BOOKS_FAILURE: return {...state,isLoading:false,isError:true}

    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        // You can handle updating the book data here if needed.
      };

    default:
      return state;
  }
};
