import React, { useReducer } from "react";

export const initialState = { name: "", batch: "", course: "", image: "", rating: 0, status: "inactive", };

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME": return {...state,name: payload,};
    case "BATCH": return {...state,batch: payload,};
    case "COURSE": return {...state,course: payload,};
    case "IMAGE": return {...state,image: payload,};
    case "RATING": return {...state,rating: payload,};
    case "STATUS": return {...state,status: payload ? "active" : "inactive",};
    case "RESET": return initialState;
    default: return state; // throw new Error(`invalid action type`);
  }
};

export const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, batch, course, image, rating, status } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET", payload: e.target.checked });
  };
  const handleCheckbox = (e) => {
    dispatch({ type: "STATUS", payload: e.target.checked });
    // console.log(e.target.checked);
  };
  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            <input type="text" value={name} onChange={(e) =>dispatch({ type: "NAME", payload: e.target.value })} placeholder="Name" />
            {/* Provide Input tag Here */}
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            <input type="text" value={batch} onChange={(e) =>dispatch({ type: "BATCH", payload: e.target.value })} placeholder="Batch"/>
            {/* Provide Input tag Here */}
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            <input type="text" value={course} onChange={(e) =>dispatch({ type: "COURSE", payload: e.target.value })} placeholder="Course"/>
            {/* Provide Input tag Here */}
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            <input type="text" value={image} onChange={(e) => dispatch({ type: "IMAGE", payload: e.target.value })} placeholder="image" />
            {/* Provide Input tag Here */}
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            <select data-testid="rating-select" onChange={(e) =>dispatch({ type: "RATING", payload: e.target.value })} value={rating}>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* Provide Select tag Here */}
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper">
            <label>Current Status :</label>
            <div>
              {/* Provide checkbox Here */}
              <label>Active</label>
              <input type="checkbox" onChange={handleCheckbox} />
            </div>
          </div>
          <button type="submit">Add Student</button>
          {/* Provide Button to submit Here */}
        </form>
      </div>
    </div>
  );
};
