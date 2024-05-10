import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch specific product details from JSON server
    axios.get(`http://localhost:8080/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div data-testid="product-details" >
      <div>
        {/* show product details here */}
        <h2>Product Details</h2>
        <h3 data-testid="product_name">{product.name}</h3>
        <p data-testid="product_price">{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
