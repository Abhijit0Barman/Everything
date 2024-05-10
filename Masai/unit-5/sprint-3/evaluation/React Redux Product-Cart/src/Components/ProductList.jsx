import { ProductCard } from "./ProductCard";

export const ProductList = ({ products, addToCart }) => {
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
