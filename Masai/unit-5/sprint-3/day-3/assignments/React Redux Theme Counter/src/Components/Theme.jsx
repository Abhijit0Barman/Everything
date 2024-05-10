import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action'

const Theme = () => {
    const theme=useSelector(store=>store.themeReducer.theme)
    const dispatch=useDispatch()
    console.log(theme)

    const switchToLight=()=>{
        dispatch(handleTheme('light'))
    }

    const switchToDark=()=>{
        dispatch(handleTheme('dark'))
    }


  return (
    <div>
        <button className='light_theme' disabled={theme==='light'} onClick={switchToLight} >Switch to Light</button>
        <button className='dark_theme' disabled={theme==='dark'} onClick={switchToDark} >Switch to Dark</button>
    </div>
  )
}

export default Theme