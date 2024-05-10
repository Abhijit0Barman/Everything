import "./App.css";
import { AddStudent } from "./component/AddStudent";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App">
      {/* Do not change anything here */}
      <Navbar />
      <AddStudent />
    </div>
  );
}

export default App;
