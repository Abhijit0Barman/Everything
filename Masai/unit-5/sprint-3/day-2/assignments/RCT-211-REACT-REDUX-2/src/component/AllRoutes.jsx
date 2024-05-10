import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Add } from '../pages/Add'
import { Todo } from '../pages/Todo'
export const AllRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/edit" element={<Add/>}/>
     </Routes>
  )
}
