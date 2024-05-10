// import {initialState} from "./initialState"
// const initialState = {
// data: [],
// isLoading: false,
// isError: false,
//     };

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_HOUSE_DETAILS_REQUEST": {
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
            }
        }
        case "GET_HOUSE_DETAILS_SUCCESS": {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
            }
        }
        case "GET_HOUSE_DETAILS_FAILURE": {
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
            }
        }
        default: {
            throw new Error(`invalid action type`)
        }
    }
};

export { reducer };
