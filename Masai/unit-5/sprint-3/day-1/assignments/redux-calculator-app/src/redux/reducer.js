export const reducer = (state,action)=>{
    switch (action.type){
        case ("REDUCE"): {
            return {
                ...state,
                counter:state.counter-action.payload
            }
        } 
        case ("ADD"): {
            return {
                ...state,
                counter:state.counter+action.payload
            }
        } 
        case ("MULTIY"): {
            return {
                ...state,
                counter:state.counter*action.payload
            }
        }  case ("DIVID"): {
            return {
                ...state,
                counter:state.counter/action.payload
            }
        } 
        default :{
            return state
        }
    }
}