import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Redux Intro</h1>
      <MainRoutes />
    </div>
  );
}

export default App;
