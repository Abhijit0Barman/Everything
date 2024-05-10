import "./App.css";
import { Counter1 } from "./components/Counter1";
import { Counter2 } from "./components/Counter2";
import { Counter3 } from "./components/Counter3";
import { Counter4 } from "./components/Counter4";
import { Counter5 } from "./components/Counter5";
import { Counter6 } from "./components/Counter6";
import { Form } from "./components/Form";
import { InputRef } from "./components/InputRef";
import { UseReducer1 } from "./components/UseReducer1";

function App() {
  return (
    <div className="App">
      <h1>React Recap II</h1>
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <Counter3 propValue={10} />
      <hr />
      <Counter4 propValue={20} />
      <hr />
      <Counter5 propValue={30} />
      <hr />
      <Counter6 />
      <hr />
      <UseReducer1 />
      <hr />
      <Form />
      <hr />
      <InputRef />
    </div>
  );
}

export default App;
