import React, { useState } from "react";
import CoffeeCard from "../component/CoffeeCard";


const Coffee = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [load, setLoad] = useState(false)

  const handleFetch = () => {
    setLoad(true)
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoad(false)
      }).catch(err => {
        setErr(true)
        setLoad(false)
      })
  }

  if (load) {
    return (
      <>
        <h1>Loading...</h1>
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
      </>
    )
  }

  if (err) {
    return (
      <>
        <h1>Something Went Wrong...</h1>
        <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.webp" alt="" />
      </>
    )
  }

  return (
    <div >
      {/* Create Button `Get Coffee` here */}
      <button style={{ margin: "10px 0px", borderRadius: "5px", height: "30px", width: "120px", border: "none", backgroundColor: "#1B63C8", color: "white" }} onClick={handleFetch}>Get Coffee</button>
      <div className="coffee_container">
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {
          data.length > 0 && data.map((item) => (
            <CoffeeCard key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
};

export default Coffee;
