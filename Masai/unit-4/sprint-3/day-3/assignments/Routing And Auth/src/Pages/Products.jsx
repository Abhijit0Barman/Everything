// import React from 'react'

// export default function AllProducts() {

//   return (
//     <div>
//       <h2>All Products</h2>
//       <div className = "products-wrapper">
//           {/* Map the below div against product data */}
//             <div>
//                 <h3 className = "name"> </h3>
//                 <div className= "brand"></div>
//                 <div className = "price"></div>
//             </div>
//       </div>
//     </div>
//   )
// }

// Products.js
import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
        );
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          // Handle fetch error
        }
      } catch (error) {
        // Handle network or other errors
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
