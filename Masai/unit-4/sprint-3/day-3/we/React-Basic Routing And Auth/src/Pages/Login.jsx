import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, isAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    if(isAuth){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <form className="auth_form" onSubmit={handleSubmit}>
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="email"
                    className="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="password"
                    className="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input className="submit" type="submit" />

            </form>

        </div>
    )
}