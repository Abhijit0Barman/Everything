import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'

export default function User({ user,isDarkTheme }) {
  // const { isDarkTheme,toggleTheme } = useContext(ThemeContext)
  const accentColor = isDarkTheme ? 'yellow' : 'blue';

  return (
    <div data-testid="user" style={{color:accentColor}}>
    <img src={user.img} alt={user.name} />
      <h2>{user.name}</h2>
      <h3>{user.position}</h3>
      <input data-testid="level" type="range" value={user.level} />
      <h3>Professional Level{user.level}</h3>
      <h3>{user.points} Points</h3>
    </div>
  )
}
