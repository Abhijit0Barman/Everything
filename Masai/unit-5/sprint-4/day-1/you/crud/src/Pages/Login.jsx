import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Authentication/action";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const location = useLocation(); //⭐⭐⭐⭐
  const navigate = useNavigate(); //⭐⭐⭐⭐
  const dispatch = useDispatch(); //⭐⭐⭐⭐
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const { isAuth, isError, errorMessage } = useSelector((s) => {
    return {
      isAuth: s.authReducer.isAuth,
      isError: s.authReducer.isError,
      errorMessage: s.authReducer.errorMessage,
    };
  }, shallowEqual);

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };

    dispatch(login(userData)) //⭐⭐⭐⭐
      .then(() => {
        navigate(location.state, { replace: true }); //⭐⭐⭐⭐
      })
      .catch((err) => {});
  };

  //⭐⭐⭐⭐
  return (
    <DIV auth={isAuth.toString()} err={isError.toString()}>
      <h2>{isAuth ? "Login Succesfull" : "Login to continue"}</h2>
      <h3>{isError && errorMessage}</h3>
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
      <button onClick={handleLogin}>Login</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: ${({ auth }) => (auth === "true" ? "green" : "red")}; //⭐⭐⭐⭐
  }

  input {
    height: 35px;
    font-size: larger;
    border: ${({ err }) =>
      err === "true" ? "1px solid red" : "1px solid green"};
  }

  button {
    height: 35px;
    border: none;
    background-color: saddlebrown;
  }
`;
