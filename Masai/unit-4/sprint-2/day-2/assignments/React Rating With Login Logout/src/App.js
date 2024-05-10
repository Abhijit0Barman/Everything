import React, { useState } from "react";
import Login from "./Components/login/Login";
import Dashboard from "./Components/dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;



/*
// Import the required dependencies

import React, { useState } from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';

// Login component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Star component
const Star = ({ selected, onSelect }) => {
  return (
    <FaStar
      data-icon="star"
      className={selected ? 'star selected' : 'star'}
      onClick={onSelect}
    />
  );
};

// StarRating component
const StarRating = ({ rating, onRatingChange }) => {
  const handleRatingChange = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleRatingChange(index + 1)}
        />
      ))}
      <p>{`${rating} of 5`}</p>
    </div>
  );
};

// Comment component
const Comment = ({ title, rating, onDelete }) => {
  return (
    <div className="comment">
      <h1 style={{ color: rating > 2 ? 'yellow' : 'grey' }}>{title}</h1>
      <StarRating rating={rating} onRatingChange={() => {}} />
      <FaTrash data-icon="trash" className="trash" onClick={onDelete} />
    </div>
  );
};

// CommentList component
const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          title={comment.title}
          rating={comment.rating}
          onDelete={() => onDeleteComment(comment.id)}
        />
      ))}
    </div>
  );
};

// Dashboard component
const Dashboard = ({ onLogout }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [comments, setComments] = useState([
    { id: 1, title: 'Comment 1', rating: 1 },
    { id: 2, title: 'Comment 2', rating: 2 },
    { id: 3, title: 'Comment 3', rating: 3 },
    { id: 4, title: 'Comment 4', rating: 4 },
    { id: 5, title: 'Comment 5', rating: 5 },
  ]);

  const handleLogout = () => {
    setAuthenticated(false);
    onLogout();
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
    </div>
  );
};

// App component
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="app">
      {loggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
*/


