import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction, requestAction } from '../redux/Authent/action'


export const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()

    const handleSubmit=()=>{
        const userobj ={
            email,
            password,
        }
        dispatch(requestAction())
        axios.post("https://reqres.in/api/login",userobj)
        .then((res)=>{
            dispatch(loginAction(res.data.token))
            console.log(res.data)
        })
        .catch((error)=>{
            dispatch(failerAction())
        })
    }
return (
    <div> 
        <h1>Login app</h1>
    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} name='email' value={email} />
    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} name='password' value={password} />
    <button type='submit' onClick={handleSubmit}>submit</button>

    </div>
  )  
}
