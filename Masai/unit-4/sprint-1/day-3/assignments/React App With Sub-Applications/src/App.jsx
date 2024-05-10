// function App() {
//   return (
//     <>
//       {/* import the Counter,TodoList, Users and add them here in the same order  */}
//     </>
//   );
// }

// export default App;

import React from "react";
import Counter from "./Components/counter/Counter";
import TodoList from "./Components/todolist/TodoList";
import Users from "./Components/users/Users";

const App = () => {
  return (
    <div>
      <Counter />
      <TodoList />
      <Users />
    </div>
  );
};

export default App;
