import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivetRoutes = ({children}) => {
  
 const auth=useSelector((store)=>store.AuthReducer.isAuth)
  
 return (
    auth? children :<Navigate to={"/login"}/>
 )
   
 
}
