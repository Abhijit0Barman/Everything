import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Routes/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}