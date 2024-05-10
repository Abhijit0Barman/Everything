import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the action types as "name", "gender", "role", "maritalStatus"(for updating "name", "gender", "role", "maritalStatus" ) and "reset" along with the default cases
// the reset action type should show reset the state to initial state
// the default case should throw an Error with message `invalid action type`.
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "gender": {
      return { ...state, gender: action.payload };
    }
    case "role": {
      return { ...state, role: action.payload };
    }
    case "maritalStatus": {
      return { ...state, maritalStatus: action.payload };
    }
    case "reset": {
      return initialState;
    }

    default:
      throw new Error(`invalid action type`);
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);

  //store the data in the below variable on clicking the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  const handleCheckbox = (e) => {
    dispatch({ type: "maritalStatus", payload: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
    // e.target.checked = false;
  };

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
              />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select
                name="gender"
                data-testid="gender-select"
                onChange={(e) =>
                  dispatch({ type: "gender", payload: e.target.value })
                }
                value={state.gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select
                name="role"
                data-testid="role-select"
                onChange={(e) =>
                  dispatch({ type: "role", payload: e.target.value })
                }
                value={state.role}>
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper">
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input
                  type={"checkbox"}
                  name="maritalStatus"
                  onChange={handleCheckbox}
                  checked={state.maritalStatus} // ⭐⭐⭐⭐
                />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* add table or h2 tag as per the problem statement */}
        {submittedData.length === 0 ? (
          <h2 data-testid="no-user-container">no users found</h2>
        ) : (
          <table data-testid="user-container">
            <thead>
              <tr>
                <th>S.no</th>
                <th>User</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              {/* append the data here with the help of the `tr` and `UserRow`
              components. */}
              {submittedData?.map((item, index) => (
                <UserRow key={index} {...item} no={index + 1} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
