import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/products/action.js";
import { ProductCard } from "./ProductCard.jsx";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.productReducer.products);

  useEffect(() => {
    dispatch(getProduct);
  }, [products]);
  console.log("productlist");
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
