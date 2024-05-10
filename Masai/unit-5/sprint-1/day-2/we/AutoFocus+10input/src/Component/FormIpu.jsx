import { useReducer } from "react";

const init = {
  name: "",
  age: "",
  lastName: "",
  address: "",
  hobbies: "",
  gf: "",
  lass: "",
  ackage: "",
  birth: "",
  child: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    }
    case "RESET": {
      return init;
    }
    default: {
      return state
    }
  }
};

export const FormIpu = () => {
  const [state, dispatch] = useReducer(reducer, init);

  //By the help of dispatch && handleChange, we are taking input values
  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({
      type: "CHANGE",
      payload: {
        name: name,
        value: value
      }
    })
    console.log(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    dispatch({
      type: "RESET"
    })
  }
  const { name, age, address, hobbies, lastName, gf, lass, ackage, birth, child } = state
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={name} name="name" placeholder="name" />
          <input type="text" onChange={handleChange} value={age} name="age" placeholder="age" />
          <input type="text" onChange={handleChange} value={lastName} name="lastName" placeholder="lastName" />
          <input type="text" onChange={handleChange} value={address} name="address" placeholder="address" />
          <input type="text" onChange={handleChange} value={hobbies} name="hobbies" placeholder="hobbies" />
          <input type="text" onChange={handleChange} value={gf} name="gf" placeholder="gf" />
          <input type="text" onChange={handleChange} value={lass} name="lass" placeholder="lass" />
          <input type="text" onChange={handleChange} value={ackage} name="ackage" placeholder="ackage" />
          <input type="text" onChange={handleChange} value={birth} name="birth" placeholder="birth" />
          <input type="text" onChange={handleChange} value={child} name="child" placeholder="child" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
