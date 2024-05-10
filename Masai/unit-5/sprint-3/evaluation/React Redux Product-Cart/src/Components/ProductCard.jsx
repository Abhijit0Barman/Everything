export const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-title">{product.title}</p>
      <p className="product-brand">{product.brand}</p>
      <p className="product-price">{product.price}</p>
      <p className="product-discount">{product.discountPercentage}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
