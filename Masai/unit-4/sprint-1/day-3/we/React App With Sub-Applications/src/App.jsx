import Counter from "./Components/counter/Counter";
import TodoList from "./Components/todolist/TodoList";
import Users from "./Components/users/Users";

function App() {
  return (
    <>
      {/* import the Counter,TodoList, Users and add them here in the same order  */}
      <Counter />
      <TodoList />
      <Users />

    </>
  );
}

export default App;
