import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser } = useContext(AuthContext)
  const history = useHistory()

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email, password,
    };

    loginUser(userDetails)
    history.push('/')
  }

  return (
    <div data-testid="login">
      <h2>Login Page</h2>
      <form data-cy="login-form" onSubmit={handleFormSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div data-cy="go-to-home-page">
        {/* Add a Link tag here with textContent `Home Page` after `Go to` and on clicking it we will be redirected to Home page*/}
        <Link to="/" children="Home Page" />
        Go to
      </div>
    </div>
  );
};

export default Login;
