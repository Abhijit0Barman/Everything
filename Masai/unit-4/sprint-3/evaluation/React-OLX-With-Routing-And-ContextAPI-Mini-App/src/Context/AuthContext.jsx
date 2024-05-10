import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuth: false, userDetailes: null });

  const loginUser = async (userDetailes) => {
    try {
      const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetailes),
      });

      const data = await response.json();
      if (response.ok) {
        const { token } = data;
        setAuthState({ isAuth: true, userDetailes: { email: userDetailes.email, token } })
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const logoutUser = () => {
    setAuthState({ isAuth: false, userDetailes: null });
  };

  let providerState = {
    authState, loginUser, logoutUser,
  };

  return <AuthContext.Provider value={providerState}>
    {children}
  </AuthContext.Provider>






  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
