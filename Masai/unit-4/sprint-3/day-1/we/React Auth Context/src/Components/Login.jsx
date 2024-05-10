import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin,isAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <form data-testid="auth_form" onSubmit={handleSubmit} >
                <input
                    type="email"
                    data-testid="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <input
                    type="password"
                    data-testid="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}

                />
                <br />
                <input type="submit" />

            </form>
        </div>
    )
}
