import styled from "styled-components";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authentication/action";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("9512364");
  const dispatch = useDispatch();
  // const isAuth = useSelector((store) => store.authReducer.isAuth);//⭐1st way

  const { isAuth, isError, errorMessage } = useSelector((s) => s.authReducer, shallowEqual);//⭐2nd way

/**
const { isAuth, isError, errorMessage } = useSelector((s) => {      //⭐3rd way
  //because im returning an new object, 
  //it will cause Unnecessary render at other components and we can avoid that by using "shallowEqual"
  return {
    isAuth: s.authReducer.isAuth,
    isError: s.authReducer.isError,
    errorMessage: s.authReducer.errorMessage,
  };
}, shallowEqual);
*/

  // const location = useLocation(); //⭐⭐⭐⭐
  // const navigate = useNavigate(); //⭐⭐⭐⭐

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    // console.log(user);
    dispatch(login(user));
  };

  return (
    // here in DIV we passing the value as a props. In order to style dynamically
    // <DIV auth={isAuth} err={isError}> its not support boolean-value, thats why we passing the boolean value as a string after converting, and comparing the strings are matched or not
    <DIV auth={isAuth.toString()} err={isError.toString()}>
      <h2>{isAuth ? "Login Successful" : "Login to continue"}</h2>
      <h3>{isError && errorMessage}</h3>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </DIV>
  );
};

/*   dispatch(login(userData)) //⭐⭐⭐⭐
      .then(() => {
        navigate(location.state, { replace: true }); //⭐⭐⭐⭐
      })
      .catch((err) => {});
  };
*/

//in-order to access auth value, we have to pass the value in wrapper component, just like passing store in redux, same pass the value in the parent, in this case its a "DIV" - which is created by using styled-components
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
      err === "true" ? "1px solid red" : "1px solid gray"};
  }

  button {
    height: 35px;
    border: none;
    background-color: saddlebrown;
  }
`;
