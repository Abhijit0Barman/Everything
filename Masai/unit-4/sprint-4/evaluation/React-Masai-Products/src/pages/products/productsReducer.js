export const initState = {
  loading: false,
  err: false,
  res: {},
};
// The above is the initial state of the reducer. Don't rename/edit it
export const productsReducer = (state, action) => {
  // const {type,payload}=action
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
        err: false,
        res: {},
      }
    }
    case "SUCCESS": {
      return {
        ...state,
        loading: false,
        err: false,
        res: action.payload,
      }
    }
    case "ERROR": {
      return {
        ...state,
        loading: false,
        err: true,
        res: {},
      }
    }
    default: {
      throw new Error(`invalid action type`)
    }
  }
};
