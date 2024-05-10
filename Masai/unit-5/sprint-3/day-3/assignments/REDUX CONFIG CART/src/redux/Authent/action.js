import {LOGIN_FAILER, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"



export  const loginAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}

export  const requestAction=()=>{
    return {type:LOGIN_REQUEST}
}

export  const failerAction=()=>{
    return {type:LOGIN_FAILER}
}
