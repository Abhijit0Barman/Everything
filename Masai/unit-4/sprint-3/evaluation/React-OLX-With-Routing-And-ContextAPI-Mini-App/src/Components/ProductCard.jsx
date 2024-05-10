import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return <div data-testid="product-card">
    <img src={product.images[0]} alt={product.title} />
    <p>{product.price}</p>
    <h3>{product.title}</h3>
    <p>Location: {product.location}</p>
    <Link to={`/product/${product.id}/view`}>View Details</Link>
  </div>;
};

export default ProductCard;
