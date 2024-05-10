import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import db from '../db.json'
import User from './User'

export const Dashboard = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
    // console.log(isDarkTheme);
    return (
        <div data-testid="dashboard-cont"
            style={{
                backgroundColor: isDarkTheme ? "black" : "white",
                color: isDarkTheme ? "white" : "black"
            }}
        >
            <select data-testid="select-theme" onChange={toggleTheme}>
                <option value="light" >Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            {
                db.map((user) => (
                    <User key={user.id} user={user} isDarkTheme={isDarkTheme}/>
                ))
            }
        </div>
    )
}
