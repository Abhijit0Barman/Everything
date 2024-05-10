import AddTodo from "./AddTodo";
import Pagination from "./Pagination";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";

function TodoList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async () => {
    try {
      setLoad(true);
      let res = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos?_limit=${limit}&_page=${page}`
      );
      let total = res.headers.get('X-Total-Count');
      let data = await res.json();
      // console.log(data, total)
      setTotalPage(Math.ceil(total / limit))
      setData(data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      // console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const postRequest = async (body) => {
    // console.log(body);
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        fetchData();
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data)

  const deletTodos = async (id) => {
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`, {
        method: "DELETE",
      }).then((res) => {
        fetchData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const putRequest = async (id, body) => {
    // console.log(body);
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        fetchData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const pagination = (val) => {
    setPage(page + val);
  };

  return (
    <>
      {error ? <h1 data-testid="err">Something went wrong..</h1> :
        load ? (
          <h1 data-testid="loading">Loading...</h1>
        ) : (
          <>
            <select
              value={limit}
              id="key"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
            </select>

            <AddTodo postRequest={postRequest} />

            {data.map((item) => (
              <TodoItem
                key={item.id}
                {...item}
                deletTodos={deletTodos}
                putRequest={putRequest}
              />
            ))}

            <Pagination pagination={pagination} page={page} totalPage={totalPage} />
          </>
        )}
    </>
  );
}

export default TodoList;
