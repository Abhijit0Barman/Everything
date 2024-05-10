import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/action";

export const ProductList = () => {
const dispatch=useDispatch()
const products=useSelector(s=>s.productReducer.products)

  useEffect(() => {
    dispatch(getProduct)
  },[]);

  return <div>
    {
      products.map(item=>(
        
      ))
    }
  </div>;
};
