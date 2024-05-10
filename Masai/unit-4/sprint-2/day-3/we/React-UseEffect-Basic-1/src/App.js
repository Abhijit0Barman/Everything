import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchemployee = async () => {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=12`
      );
      let data = await res.json();
      setData(data.data);
      // console.log(data.totalPages);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchemployee();
  }, [page]);

  // console.log(data);
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}
            {data.map((item) => (
              <tr key={item.id}>
                <td className="employee-card-name">{item.name}</td>
                <td className="employee-card-department">{item.department}</td>
                <td className="employee-card-image">{item.image}</td>
                <td className="employee-card-gender">{item.gender}</td>
                <td className="employee-card-salary">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          style={{
            border: index + 1 === page ? "1px solid red" : "1px solid black",
          }}
          disabled={index + 1 === page}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default App;
