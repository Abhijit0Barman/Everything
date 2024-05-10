import React from 'react'
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom'

export default function AllProducts() {
  const [apiData, setApiData]=useState([])
 
  const fetchproducts= async ()=>{
    try{
      let res= await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
      let data = await res.json()
     
      setApiData(data)
    }
    catch(error){
      console.log(error)
    }
  }
useEffect(()=>{
  fetchproducts()
},[])
  return (
    <div>
      <div>All Products</div>
      {/* <ul> */}
      <div data-testid = "products-wrapper">
   
      {apiData.map(product => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price} 
            </Link>
          </div>
        ))}
      </div>
        {/* </ul> */}
    </div>
  )
}
