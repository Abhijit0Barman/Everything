import "./App.css";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Redux Intro</h1>
      <Counter />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
