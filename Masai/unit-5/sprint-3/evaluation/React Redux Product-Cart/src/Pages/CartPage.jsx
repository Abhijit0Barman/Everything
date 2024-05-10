import { useSelector } from "react-redux";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return <div data-testid="cart-list">{/* Map through cart store  */}
   {cartItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <p className="product-title">{item.title}</p>
            <p className="product-brand">{item.brand}</p>
            <p className="product-price">{item.price}</p>
            <p className="product-discount">{item.discountPercentage}</p>
          </div>
        ))}
  </div>;
};
