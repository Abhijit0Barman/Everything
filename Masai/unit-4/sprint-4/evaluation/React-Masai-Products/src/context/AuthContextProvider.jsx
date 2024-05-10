import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({ isAuth: false, token: "" });

  const login = (token) => {
    setAuthDetails({ isAuth: true, token: token });
  };

  const logout = () => {
    setAuthDetails({ isAuth: false, token: "" });
  };

  let providerState = { login, logout, authDetails };

  return (
    <AuthContext.Provider value={providerState}>
      {children}
    </AuthContext.Provider>
  );

  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
