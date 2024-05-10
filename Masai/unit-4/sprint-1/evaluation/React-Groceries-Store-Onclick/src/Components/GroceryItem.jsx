import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";

const GroceryItem = ({ image, name, price }) => {
  const [quan, setQuan] = useState(0)
  // const [cartCount, setCartCount] = useState(0)


  const handleCart = () => {
    setQuan(1)
    // setCartCount((p) => p + 1)
  }

  const handleQuan = (para) => {
    setQuan(para)
    // setCartCount((p) => p + para - quan)
  }

  return <>
    <div className="grocery_card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{price}</h5>
      {
        quan === 0 ? (
          <AddToCartButton onClick={handleCart} />
        ) : (
          <QuantityButton quan={quan} onChange={handleQuan} />
        )
      }
      {/* <p>{cartCount}</p> */}
    </div>
  </>;
};

export default GroceryItem;
