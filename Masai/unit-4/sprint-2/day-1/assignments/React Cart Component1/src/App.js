import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product";

const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 3,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = useState(data);

  const handleQty = (id, payload) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = product.quantity + payload;
          return { ...product, quantity: newQuantity >= 0 ? newQuantity : 0 };
        }
        return product;
      })
    );
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            handleQty={handleQty}
          />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        Total: {calculateTotal()}
      </h1>
    </div>
  );
}

export default App;



// import "./App.css";

// const data = [
//   {
//     id: 1,
//     name: "Noodles",
//     price: 30,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Biriyani",
//     price: 90,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Chips",
//     price: 10,
//     quantity: 1,
//   },
// ];

// function App() {
//   return (
//     <div className="App" data-testid="app">
//       <div data-testid="cart-products">
//         {/*  map through the  data and pass props to the Product component */}
//       </div>

//       <h1 id="total-cart" data-testid="total-cart">
//         {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
//         {/* The total price should be in this syntax `Total :123` */}
//       </h1>
//     </div>
//   );
// }

// export default App;
