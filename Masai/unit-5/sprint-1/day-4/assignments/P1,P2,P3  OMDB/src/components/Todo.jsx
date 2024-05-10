import React from 'react';

const useMyReducer = (reducer, initialState) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return [state, dispatch];
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useMyReducer(todoReducer, []);

    const handleAddTodo = (text) => {
        dispatch({ type: 'ADD_TODO', text });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', id });
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: 'REMOVE_TODO', id });
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo(e.target.value);
                        e.target.value = '';
                    }
                }}
                placeholder="Add a new todo..."
            />
        </div>
    );
};

export default TodoApp;
