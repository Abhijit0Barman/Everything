import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">User Email</label>
          <br />
          <input
            type="email"
            id="login-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            data-testid="login-email"
            required
          />
        </div>
        <div>
          <label htmlFor="login-password">User Password</label>
          <br />
          <input
            type="password"
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            data-testid="login-password"
            required
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;



/*import React from "react";

const Login = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
/*