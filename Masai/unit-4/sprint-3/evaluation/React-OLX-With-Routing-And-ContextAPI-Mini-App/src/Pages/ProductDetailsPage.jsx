import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const ProductDetailsPage = () => {

  const {id}=useParams();
  const [product,setProduct]=useState({})
  const [Loading,setLoading]=useState(false)

  useEffect(()=>{
    const fetchProductDetails=async ()=>{
      try {
        setLoading(true)
        const response=await fetch (`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/product/${id}`);
        const data=await response.json();
        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails()
  },[id]);

  return (
    <div data-testid="product-details-page">
      {/* below h2 tag textContent should include title of the product*/}
      <h2>{product.title}</h2>
      {/*below p tag textContent should contain description of the product */}
      <p>{product.description}</p>
      {/*below p tag textContent should include category of the product*/}
      <p>Category: {product.category}</p>
      {/*below p tag textContent should include price of the product*/}
      <p>Price: ${product.price}</p>
      {/*below p tag textContent should include location of the product*/}
      <p>Location: {product.location}</p>
      {/*below p tag textContent should include seller's name*/}
      <p>Seller: {product.seller.name}</p>
      {/*below p tag textContent should include seller's email*/}
      <p>Email: {product.seller.email}</p>
      {/*below p tag textContent should include seller's createdAt*/}
      <p>Created At: {product.createdAt}</p>
      <h3>Images:</h3>
      <div className="images">{/*render all the images here*/}
      {product.images.map((item,index)=>{
        <img src={item} key={index} alt={index} />
      })}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
