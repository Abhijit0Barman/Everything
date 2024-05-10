import { ADD_TO_CART } from "./actionTypes";

export const addToCart = (product) => {
  // Complete add to cart store functionality
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
