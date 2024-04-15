import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/products/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};

export const Admin = () => {
  const [data, setData] = useState(initialState);
  const { name, image, brand, price, category, gender } = data;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "price" ? +value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addProduct(data));
    setData(initialState);
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h1>Add Products</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image"
          value={image}
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          name="brand"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          name="price"
          onChange={handleChange}
        />
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
        <select name="category" value={category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Foot Wear</option>
        </select>
        <button type="submit">Add Products</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid gray;
  padding: 40px;
  text-align: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  input,
  select {
    height: 40px;
    width: 400px;
    font-size: larger;
  }
  button {
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  button:hover {
    background-color: royalblue;
  }
`;

/**
 import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../Redux/Products/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: 0,
  category: "",
  gender: "",
};

export const Admin = () => {
  const [data, setData] = useState(initialState);
  const { name, image, brand, price } = data;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    // setData((prev) =>{return {...prev,[name]:name==="price"? +value:value}});
    setData((prev) => ({ ...prev, [name]: name === "price" ? +value : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    dispatch(addProduct(data));
    setData(initialState);
  };

  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          value={image}
          type="text"
          placeholder="Image"
          name="image"
          onChange={handleChange}
        />
        <input
          value={brand}
          type="text"
          placeholder="Brand"
          name="brand"
          onChange={handleChange}
        />
        <input
          value={price}
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Foot Wear</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid grey;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  input,
  select {
    height: 40px;
    width: 100%;
    font-size: larger;
  }

  button {
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: aqua;
    color: white;
  }
`;

 */
