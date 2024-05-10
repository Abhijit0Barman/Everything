//Complete the reducer function logic inside the curly braces {}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        }
        case "REDUCE": {
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer };
