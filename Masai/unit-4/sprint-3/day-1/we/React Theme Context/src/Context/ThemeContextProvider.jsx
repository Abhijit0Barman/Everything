import React from 'react'
// import App from '../App'
import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()


export default function ThemeContextProvider({ children }) {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(p => !p)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
