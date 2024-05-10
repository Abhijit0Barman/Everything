import "./App.css";
import { ClickMe } from "./components/ClickMe";
import { ClickMeThrottle } from "./components/ClickMeThrottle";
import { Counter } from "./components/Counter";
import { Counter2 } from "./components/Counter2";
import { Timer1 } from "./components/Timer1";
import { Timer2 } from "./components/Timer2";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <Counter />
      <Counter2 />
      <hr />
      <ClickMe />
      <br />
      <ClickMeThrottle />
      <hr />
      <Timer1 />
      <Timer2 />
    </div>
  );
}

export default App;
