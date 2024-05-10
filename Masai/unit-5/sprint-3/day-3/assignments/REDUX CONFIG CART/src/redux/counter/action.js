import { ADD_ACTION, REDUCE_ACTION } from "./actionType"

export const AddAction=(payload)=>{
 return {type:ADD_ACTION,payload}
}

export const ReduceAction=(payload)=>{
    return {type:REDUCE_ACTION,payload}
   }