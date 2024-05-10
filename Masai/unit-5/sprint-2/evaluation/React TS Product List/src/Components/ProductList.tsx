import React, { useEffect, useState } from "react";
import { DataType, getProducts } from "../api";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<DataType[]>([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err)
    )
},[])

return (
  <div className={`product-list`}>
    {/* Add all product cards here in grid format  */}
    {products?.map((item)=>(
      <ProductCard key={item.id} {...item} setProducts={setProducts}/>
    ))}
  </div>
);
};

export default ProductList;
