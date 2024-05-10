

// Assign initial State object here
export const initialState = {
    "loading": false,
    "notes": [],
    "error": false
};

//complete the reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_NOTES_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }
        case "GET_NOTES_SUCCESS": {
            return {
                ...state,
                loading: false,
                notes: action.payload
            }
        }
        case "GET_NOTES_FAILURE": {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        default: {
            throw new Error(`invalid action type`)
        }
    }
};
