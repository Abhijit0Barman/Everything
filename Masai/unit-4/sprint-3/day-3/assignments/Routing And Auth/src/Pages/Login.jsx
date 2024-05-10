// import React from 'react'

// export default function Login() {
    
//     return (
//         <div>
//             <form className = "auth_form"  >
//                 <input
//                     style = {{padding:"5px", margin: "10px", width: 200}}
//                     type = "email"
//                     className = "email"
//                     placeholder = "Enter Email"
//                 />
//                 <br />
//                 <input
//                     style = {{padding:"5px", margin: "10px", width: 200}}
//                     type = "password"
//                     className = "password"
//                     placeholder = "Enter password"
//                 />
//                 <br />
//                 <input className = "submit" type = "submit"/>

//             </form>  
                          
//         </div>
//     )
// }

// Login.js
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Make API request to login
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setAuth(true);
        history.push("/");
      } else {
        // Handle login error
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
