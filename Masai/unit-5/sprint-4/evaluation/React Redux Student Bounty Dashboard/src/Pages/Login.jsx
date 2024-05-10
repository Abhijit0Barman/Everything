import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const handleChange = (e) => {
  //   const {name,value}=e.target
  //   setEmail
  // };
  const handleClick = (e) => {
    let obj = { email, password };
    dispatch(login(obj)).then(() =>
      navigate(location.state, { replace: true })
    );
  };

  return (
    <DIV>
      <h2>Log In</h2>
      <input
        // name="email"
        data-testid="user-email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        // name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        data-testid="user-password"
        type="password"
        placeholder="Password"
      />
      <button data-testid="user-login" onClick={handleClick}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
