import React, { useContext } from 'react'
import { AuthContext } from "../Context/AuthContextProvider";

export const Dashboard = () => {
    const { isAuth, token, handleLogout } = useContext(AuthContext)
    return (isAuth && (
        <div >
            <h3 data-testid="token" >Token: {token}</h3>
            <button data-testid="logout" onClick={handleLogout}>LOGOUT</button>
        </div>)
    )
}
