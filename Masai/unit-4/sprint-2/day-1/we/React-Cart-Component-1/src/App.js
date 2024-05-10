import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [realData, setRealData] = useState(data)

  const handleQty = (id, val) => {
    const updateData = realData.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: Math.max(item.quantity + val, 0) }
      }
      return item;
    })
    setRealData(updateData)
  }

  const totalPrice = (item) => {
    const mergeValue = item.reduce((tota, ele) => {
      return tota + ele.quantity * ele.price
    }, 0)
    return mergeValue
  };

  return (
  <div style={{border:"2px solid red",margin:"20px",padding:"20px",textAlign:"center"}}>
    <data Data="App" data-testid="app">
      <div data-testid="cart-products">
        {
          realData.map((item) => (
            <Product key={item.id} {...item} handleQty={handleQty} />
          ))
        }
      </div>
      <h1 id="total-cart" data-testid="total-cart">
        <h1>{`Total :${totalPrice(realData)}`}</h1> {/* The total price should be in this syntax `Total :123` */}
      </h1>
    </data>
  </div>
  );
}
export default App;

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