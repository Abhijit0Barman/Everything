import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}")
        const data = await response.json();
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>{/* render all ProductCard's here */}
      <h1>Home Page</h1>
      {loading ? (<Loading />) : (
        <div data-testid="home-page-products">
        {products.map((product)=>(
        <ProductCard key={product.id} product={product} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Home;
