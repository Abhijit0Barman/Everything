
import React from 'react'
import { ADD_ACTION, REDUCE_ACTION } from './actionType'

const init={
    counter:10
}
export const reducer = (state=init,{type,payload}) => {
   switch(type){
    case ADD_ACTION:{
       return {
        ...state,
        counter:state.counter+payload
       }
    }
    case REDUCE_ACTION:{
        return {
            ...state,
            counter:state.counter-payload
           }
    }
    default:{
        return state
    }
   }
}
