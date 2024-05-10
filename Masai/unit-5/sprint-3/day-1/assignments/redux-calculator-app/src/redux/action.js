import { ADD, DIVID, MULTIY, REDUCE } from "./actionType";

export const addAction =(payload)=>{
    return {type:ADD, payload};
}

export const reduceAction =(payload)=>{
    return {type:REDUCE, payload};
}

export const multiyAction =(payload)=>{
    return {type:MULTIY, payload};
}

export const dividAction =(payload)=>{
    return {type:DIVID, payload};
}