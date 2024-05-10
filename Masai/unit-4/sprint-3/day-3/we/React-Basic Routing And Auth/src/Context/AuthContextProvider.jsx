import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState("")


    const handleLogin = async (email, password) => {

        try {
            let res = await fetch(`https://reqres.in/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ email, password })
            })
            let data = await res.json()
            // console.log(data);
            if (res.ok) {
                setToken(data.token)
                setIsAuth(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                token,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}