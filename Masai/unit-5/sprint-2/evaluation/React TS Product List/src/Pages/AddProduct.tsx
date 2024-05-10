import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { DataType, addProduct } from "../api";

const initData = {
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
}

export const AddProduct = () => {
  const [data, setData] = useState<DataType>(initData)
  const { name, brand, price, image, like, dislike } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(p => {
      return { ...p, [name]: value }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addProduct(data).then((res) => setData(initData))
  }

  return (
    <div>
      <Navbar pagename="Add Product Page" />
      <form onSubmit={handleSubmit}>
        {/* Add all fields here to take product input */}
        <h1>Add Product</h1>
        <input
          type="text"
          className="product-name"
          name="name"
          onChange={handleChange}
          placeholder="Product Name"
          value={name}
        />
        <input
          type="text"
          className="product-image"
          name="image"
          onChange={handleChange}
          placeholder="Product Image"
          value={image}
        />
        <input
          type="text"
          className="product-price"
          name="price"
          onChange={handleChange}
          placeholder="0"
          value={price}
        />
        <input
          type="text"
          className="product-brand"
          name="brand"
          onChange={handleChange}
          placeholder="Product Brand"
          value={brand}
        />
        <button className="submit-form" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};
