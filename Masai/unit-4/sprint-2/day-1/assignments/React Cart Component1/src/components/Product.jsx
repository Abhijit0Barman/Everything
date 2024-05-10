// // import module.css here;
import styles from "../components/product.module.css";


// const Product = ({name,price,quantity,id,handleQty}) => {
//   return (
//     <>
//       <div data-testid="product-container">
//         <h2 data-testid="product-name"></h2>
//         <h2 data-testid="product-price"></h2>
//         <button data-testid="quantity-increment">+</button>
//         <h2 data-testid="product-quantity"></h2>
//         <button data-testid="quantity-decrement">-</button>
//       </div>
//     </>
//   );
// };
// export default Product;


import React from "react";

const Product = ({ name, price, quantity, id, handleQty }) => {
  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button
          data-testid="quantity-increment"
          onClick={() => handleQty(id, 1)}
        >
          +
        </button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button
          data-testid="quantity-decrement"
          onClick={() => handleQty(id, -1)}
          disabled={quantity <= 0}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Product;
