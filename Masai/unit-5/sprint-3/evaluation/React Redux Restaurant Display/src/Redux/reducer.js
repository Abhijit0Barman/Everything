import {
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAILURE,
    GET_SINGLE_RESTAURANT_REQUEST,
    GET_SINGLE_RESTAURANT_SUCCESS,
    GET_SINGLE_RESTAURANT_FAILURE
} from './actionTypes'

const initialState = {
    isLoading: false,
    isError: false,
    restaurants: [],
    totalPages: 0,
    restaurant: {},
};

// complete reducer function

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case GET_RESTAURANTS_SUCCESS: {
            const { restaurants, totalPages } = action.payload
            return {
                ...state,
                isLoading: false,
                isError: false,
                restaurants,
                totalPages
            }
        }
        case GET_RESTAURANTS_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }


        case GET_SINGLE_RESTAURANT_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case GET_SINGLE_RESTAURANT_SUCCESS: {
            const restaurant = action.payload
            return {
                ...state,
                isLoading: false,
                isError: false,
                restaurant
            }
        }
        case GET_SINGLE_RESTAURANT_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        default: {
            return state;
        }
    }
};
