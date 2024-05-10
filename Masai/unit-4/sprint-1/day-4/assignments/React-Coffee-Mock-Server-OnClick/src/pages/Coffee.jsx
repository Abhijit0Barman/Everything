import { useState } from "react";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {
  const [data, setData] = useState([]);
  function fetchData() {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {/* Create Button `Get Coffee` here */}
      <button onClick={fetchData}>Get Coffee</button>
      <div className="coffee_container">
        {/* Populate coffee data inside CoffeeCard.jsx */}
        {data.map((item) => (
          <CoffeeCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
