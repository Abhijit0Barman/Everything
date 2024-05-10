import { useState } from "react";
import GroceryItem from "./GroceryItem";
import LoadingIndicator from "./LoadingIndicator";

const Groceries = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    setLoad(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries
  `)
      .then(res => res.json())
      .then((data) => {
        setData(data.data);
        setLoad(false)
      })
      .catch(err => {
        setLoad(false)
        console.log(err);
      })
  }

  return <div className="grocery_container">
    <h1>Groceries</h1>
    {
      !load ? (
        <>
          {
            data.length === 0 ? (
              <button onClick={fetchData} className="get-groceries-btn">
                Get Groceries
              </button>
            ) : (
              <div data-cy="grocery-items-container">
                {data.map((item) => (
                  <GroceryItem key={item.id} {...item} />
                ))}
              </div>
            )}
        </>
      ) : (
        <LoadingIndicator />
      )}
  </div>
};

export default Groceries;
