import styles from "./product.module.css"

const Product = ({ name, price, quantity, id, handleQty }) => {
  return (
    <>
      <div className={styles.product} data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={() => handleQty(id,+1)}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" onClick={() => handleQty(id,-1)}>-</button>
      </div>
    </>
  );
};
export default Product;