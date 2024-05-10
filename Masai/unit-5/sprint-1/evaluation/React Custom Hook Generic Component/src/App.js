import "./App.css";
import UserCard from "./Components/UserCard";
import Input from "./Components/Input";
import useDarkMode from "./hooks/useDarkMode";
import { useState } from "react"; 

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [inputValue, setInputValue] = useState(""); 
  const themeClassName = isDarkMode ? "dark-mode" : "app-component";

  return (
    <div data-testid="app-component" className={`${themeClassName} `}>
      <button
        className="theme-button"
        onClick={toggleDarkMode}
        data-testid="theme-button">
        {!isDarkMode ? "Dark" : "Light"}
      </button>
      <UserCard
        imageURL="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60"
        name="Abhijit Barman"
        title="Software Engineer"
      />
      <br />
      <Input
        variant="outline"
        value={inputValue} // Pass the input value as a prop
        onChange={(v) => setInputValue(v)} // Update the input value
        size="md"
        data-testid="input"
      />
      <div data-testid="input-value">{inputValue}</div>{" "}
      {/* Display the typed value */}
    </div>
  );
}

export default App;
