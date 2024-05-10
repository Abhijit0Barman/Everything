import { useCounterLogic } from "../logic/counterLogic";

export const Counter = () => {
  const { count, handleAdd, handleReduce } = useCounterLogic();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

/*
🔶Hooks can be called at top level only
🔶Top Level means before the return statement

🔶Custom hook can't be called from regular javaScript-function
🔶Hooks can be called from a "react-function" or "component" only
🔶you can call a hook from custom-hook

🔶Name of hook start with "use" keyword
🔶Name of component start with "Capital-Letter"
=====================================================================
When do we need to create a custom hook?
🔶If there is a logic that is being used at multiple places,
🔶If the logic is using any hook.
=====================================================================
How will I approach to create a customer?
🔶Write a function starting with `use` keyword.
🔶Figure out what to `return`
🔶Write/complete the logic to fulfill the `return statement`.
=====================================================================
🔶If I return [array] de-structure wise then I have to follow sequence.
🔶But one benefit is that I can rename whatever I want after destructuring.
=====================================================================
🔶If I return {object} de-structure wise Then I Don't have to follow the sequence. But in this case, I cannot rename after destructuring.
*/
