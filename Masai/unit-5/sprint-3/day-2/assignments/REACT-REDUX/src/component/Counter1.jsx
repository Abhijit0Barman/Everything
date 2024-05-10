import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAction, ReduceAction } from '../redux/counter/action'

export const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector((store)=>store.counterReducer.counter)
   const handleAdd=()=>{
     dispatch(AddAction(2))
   }

   const handleReduce=()=>{
    dispatch(ReduceAction(2))
   }

    
  return <>
      <h1>Counter App</h1>
    <div>counter :{counter}</div>
    <button onClick={handleAdd}>add</button>

    <button onClick={handleReduce}>reduce</button>
    </>
}
