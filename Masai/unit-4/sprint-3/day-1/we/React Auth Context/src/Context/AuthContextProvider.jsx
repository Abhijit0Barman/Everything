import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [token, setToken] = useState("")

  const handleLogin = async (email, password) => {
    setLoading(true)
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ email: email, password: password })
      })
      let data = await res.json()
      if (res.ok) {
        setToken(data.token)
        setLoading(false)
        setIsAuth(true)
      }
    } catch (error) {
      setLoading(false)
      setError(error)
    }

  }

  const handleLogout = () => {
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={
      {
        handleLogin,
        handleLogout,
        isAuth,
        token,
        loading,
        error
      }
    }>{children}</AuthContext.Provider>
  )
}
