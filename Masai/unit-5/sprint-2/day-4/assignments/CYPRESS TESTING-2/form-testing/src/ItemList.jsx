import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  // Fetch the initial list of items from the server
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => setError(error.message));
  }, []);

  const addItem = () => {
    // Send a POST request to add a new item to the server
    fetch("http://localhost:8080/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]);
        setInputText("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      {error && <div className="error">{error}</div>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
