// NOTE: DO NOT MODIFY the intial state structure in this file.
/*const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState) => {
  return state;
};

export { reducer };
*/

const initialState = {
  watches: [], // You should store the fetched watch data here
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WATCHES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_WATCHES_DATA_SUCCESS:
      return {
        ...state,
        watchData: action.payload, // Update watchData with the fetched data
        isLoading: false,
      };
    case GET_WATCHES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };