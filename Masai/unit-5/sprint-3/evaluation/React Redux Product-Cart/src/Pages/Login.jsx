import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, email: "", password: "" });
    // dispatch(loginReq());
    // axios
    //   .post(`https://reqres.in/api/login`, data)
    //   .then((res) => dispatch(loginSuc(res.data.token)))
    //   .catch((err) => dispatch(loginFail()));
    dispatch(login(data));
    // login(dispatch,data)
  };
  return (
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button data-testid="user-login" onClick={handleSubmit}>
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
