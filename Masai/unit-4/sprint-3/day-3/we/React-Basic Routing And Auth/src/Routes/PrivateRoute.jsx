import { Navigate } from "react-router-dom"
import React from 'react'
import { useContext } from "react"
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext)


    if (!isAuth) {
        return <Navigate to="/login" />
    }

    return children
}

export default PrivateRoute