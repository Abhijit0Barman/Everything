import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFail, loginReq, loginSuc } from "../redux/authentication/action";

export const Login = () => {
  const [data, setData] = useState({
    email: "eve.holt@reqres.in",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({...data,password:""})
    // console.log(data);
    dispatch(loginReq());
    axios
      .post(`https://reqres.in/api/login`, data)
      .then((res) => {
        // console.log(res.data);
        dispatch(loginSuc(res.data));
        
      })
      .catch((err) => dispatch(loginFail()));
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
