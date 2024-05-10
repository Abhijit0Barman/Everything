import React from 'react'
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'


export default function ProductDetails() {
const {id}=useParams()
const [product,setProduct]=useState({})


useEffect(()=>{
fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  setProduct(data)
})
.catch((error)=>
  console.log(error)
)
},[id])
  return (
    <div data-testid = "product-details" >
      <div>

        <h1 data-testid="product_name">{product.name}</h1>
        <p data-testid="product_price">{product.price}</p>
        
      {/* show product details here */}
      </div>
    </div>
  )
}
