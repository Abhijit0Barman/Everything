import React from 'react'
import { useState, useEffect } from 'react'


export default function Products() {
  const [apiData, setApiData] = useState([])

  const fetchData = async () => {
    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      let dat = await res.json()
      // console.log(dat.data);
      setApiData(dat.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1 >All Products</h1 >
      <div className="products-wrapper" style={{
        // border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "20px",
        margin: "30px"


      }}>
        {apiData.map(item => (
          <div style={{
            border: "1px solid black",
            padding: "20px",
            // margin:"10px"
          }}>
            {/* Map the below div agaisnt your product data */}
            <div className="id" > {item.id}</div>
            <h3 className="title" > {item.title}</h3>
            <div className="category" > {item.category}</div>
            <div className="price" > {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}