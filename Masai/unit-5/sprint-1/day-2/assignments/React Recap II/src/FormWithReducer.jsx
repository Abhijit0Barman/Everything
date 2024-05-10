import { useReducer } from 'react';

const initialState = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const FormWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', state);
        dispatch({ type: 'RESET' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE', field: name, value });
    };

    const inputFields = Array.from({ length: 10 }, (_, index) => (
        <input
            key={index}
            type="text"
            name={`input${index + 1}`}
            value={state[`input${index + 1}`]}
            onChange={handleChange}
        />
    ));

    return (
        <form onSubmit={handleSubmit}>
            <div>{inputFields}</div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWithReducer;
