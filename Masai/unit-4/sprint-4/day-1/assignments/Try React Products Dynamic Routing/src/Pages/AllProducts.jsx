import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AllProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch initial products from JSON server
    axios.get('http://localhost:8080/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>All Products</div>
      <div data-testid="products-wrapper">
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3 data-testid="product_name">{product.name}</h3>
            </Link>
            <p data-testid="product_price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
