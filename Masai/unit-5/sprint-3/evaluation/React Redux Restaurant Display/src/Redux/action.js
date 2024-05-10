import axios from "axios";
import {
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAILURE,
    GET_SINGLE_RESTAURANT_REQUEST,
    GET_SINGLE_RESTAURANT_SUCCESS,
    GET_SINGLE_RESTAURANT_FAILURE
} from './actionTypes'
// complete below functions for api requests

export const getRestaurants = () => ({
    type: GET_RESTAURANTS_REQUEST,
});

export const getRestaurantsSuccess = (restaurants, totalPages) => ({
    type: GET_RESTAURANTS_SUCCESS,
    payload: { restaurants, totalPages },
});

export const getRestaurantsFailure = (error) => ({
    type: GET_RESTAURANTS_FAILURE,
    payload: error,
});

export const getSingleRestaurant = () => ({
    type: GET_SINGLE_RESTAURANT_REQUEST,
});

export const getSingleRestaurantSuccess = (restaurant) => ({
    type: GET_SINGLE_RESTAURANT_SUCCESS,
    payload: restaurant
});

export const getSingleRestaurantFailure = (error) => ({
    type: GET_SINGLE_RESTAURANT_FAILURE,
    payload: error,
});


export const fetchRestaurants = () => {
    return (dispatch) => {
        dispatch(getRestaurants());
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
            .then((response) => {
                // const { data } = response;
                // const { restaurants, totalPages } = data;
                // console.log(response.data.data,response.data.totalPages);
                dispatch(getRestaurantsSuccess(response.data.data, response.data.totalPages));
            })
            .catch((error) => {
                dispatch(getRestaurantsFailure(error.message))
            })
    }
}


export const fetchRestaurantsDetails = (restaurantID) => {
    return (dispatch) => {
        dispatch(getSingleRestaurant())
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${restaurantID}`)
            .then((response) => {
                const { data } = response
                dispatch(getSingleRestaurantSuccess(data))
            })
            .catch((error) => {
                dispatch(getSingleRestaurantFailure(error.message))
            })
    }
}