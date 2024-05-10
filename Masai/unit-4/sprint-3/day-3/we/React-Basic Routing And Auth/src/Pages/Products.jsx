import React, { useEffect, useState } from 'react'

export default function AllProducts() {
  const [apiData, setApiData] = useState([])

  const fetchData = async () => {
    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      let data = await res.json()
      console.log(data.data);
      setApiData(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h2>All Products</h2>
      <div className="products-wrapper"
        style={
          {
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: '4rem',
            margin: "30px",
            // padding: "10px",
          }
        }
      >
        {/* Map the below div against product data */}
        {
          apiData.map(item => (
            <div style={
              {
                // border: "1px solid black",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                padding:"10px",
                // height:"150px"

              }
            }
            >
        <h3 className="name">{item.title} </h3>
        <div className="brand">{item.brand}</div>
        <div className="price">{item.price}</div>
      </div>
      ))
        }
    </div>
    </div >
  )
}