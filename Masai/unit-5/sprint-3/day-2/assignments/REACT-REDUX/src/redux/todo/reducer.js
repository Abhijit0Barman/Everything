import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOAD, POST_TODO, POST_TODO_ERROR, POST_TODO_LOAD } from "./actionType"
const init={
    todos:[],
    isError:false,
    isLoading:false
}
export const reducer=(state=init,{type,payload})=>{
   switch(type){
    case GET_TODO:{
       return {
        ...state,
        isError:false,
        todos:payload,
        isLoading:false
       }
    }
    case GET_TODO_LOAD:{
        return {
            ...state,
            isLoading:true,
           }
    }
    case GET_TODO_ERROR:{
        return {
            ...state,
            isLoading:false,
            isError:true,
           
           }
    }
    case POST_TODO:{
        return {
        ...state,
        isLoading:false,
         isError:false,
         todos:[...state.todos,payload]
        }
     }
     case POST_TODO_LOAD:{
         return {
             ...state,
             isLoading:true,
            }
     }
     case POST_TODO_ERROR:{
         return {
             ...state,
             isLoading:false,
             isError:true,
            
            }
     }
    default:{
        return state
    }
   }
}