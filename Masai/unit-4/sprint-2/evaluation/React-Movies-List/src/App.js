import React, { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import "./App.css"
const App = () => {
  const [toggle, setTogle] = useState(false)

  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button onClick={() => setTogle(!toggle)} data-testid="toggle-btn">{toggle ? "Show Movies" : "Add Movie"}</button>
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
        {toggle ? <AddMovie  /> : <MovieList />}
      </div>
    </div>
  );
};

export default App;
