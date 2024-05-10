import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default case.
//The default case within reducer function should throw an error with message "invalid action type"
const reducer = (state, action) => {
  switch (action.type) {
    // case "add_input": {
    //   return {
    //     ...state,
    //     [action.payload.name]:action.payload.value
    //   }
    // }
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    
    case "reset":{
      return action.payload
    }
    default: {
      throw new Error("invalid action type");
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
// const handleChange=(e)=>{
//      const {name,value}=e.target

//     //  dispatch({
//     //   type:"add_input",
//     //   payload:{name,value}
//     //  })

//     //  dispatch({
//     //   type: name, // Use the input field name as the action type
//     //   payload: { value },
//     // });

   
// }
  const handleSubmit = (e) => {
    e.preventDefault();
setSubmittedData({...submittedData,email:state.email,password:state.password})

    dispatch({
      type:"reset",
      payload:initialState
     })

  };
console.log(submittedData,state)
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form
        className="form-wrapper"
        data-testid="form-wrapper"
        onSubmit={handleSubmit}
      >
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input
            type="email"
            data-testid="user-email"
            name="email"
            // onChange={handleChange}
            onChange={(e) =>{
              dispatch({ type: "email", payload: e.target.value })
              console.log(e.target.value)}
            }
            value={state.email}
          />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input
            type="password"
            data-testid="user-password"
            name="password"
            // onChange={handleChange}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            value={state.password}
          />
        </div>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>

      {submittedData.email? (
        <div>
          <div data-testid="submitted-data-email">User Email: {submittedData.email}</div>
          <div data-testid="submitted-data-password">User Password: {submittedData.password}</div>
        </div>
      ) : (
        <div data-testid="no-details-container">No details found</div>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
