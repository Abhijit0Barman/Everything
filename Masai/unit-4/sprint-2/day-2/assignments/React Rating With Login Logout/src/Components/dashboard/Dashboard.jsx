import React from "react";
import CommentList from "./CommentList";

const data = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "Good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="dashboard">
      <h1>Rating - App</h1>
      <button onClick={handleLogout}>Logout</button>
      <CommentList data={data} />
    </div>
  );
};

export default Dashboard;
