import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Counter } from '../component/Counter1'
import { TodoList } from '../component/TosoList'
import { Login } from './Login'
import { PrivetRoutes } from '../component/PrivetRoutes'

export const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<Counter/>}/>
    <Route path='/todoList' element={
    <PrivetRoutes>
      <TodoList/>
    </PrivetRoutes>
    }/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
   
  
}
