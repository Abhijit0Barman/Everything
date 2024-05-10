import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { ProductList } from "../Components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { addToCart } from "../Redux/CartReducer/action";

export const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
    // getProducts(dispatch)
  }, [dispatch]);
  // console.log(`llll`, products[2]);

  return (
    <DIV>
      <Sidebar />
      <ProductList products={products} addToCart={addToCart}/>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
