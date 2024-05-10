import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL": {
      return { ...state, email: payload };
    }
    case "PASSWORD": {
      return { ...state, password: payload };
    }
    default: {
      return state;
    }
  }
};

export const Form = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={data.email}
        type="email"
        onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
        placeholder="EMAIL"
      />
      <input
        value={data.password}
        type="password"
        onChange={(e) =>
          dispatch({ type: "PASSWORD", payload: e.target.value })
        }
        placeholder="PASSWORD"
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
