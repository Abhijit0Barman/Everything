import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        /* 
        if (userContext) {
           userContext.setUser({
             name: "abhijit",
             email: "abhijit@gmail.com",
           });
         }
         */
        //after type asertion dont have to  check for null or undefined
        userContext.setUser({
            name: "abhijit",
            email: "abhijit@gmail.com",
        });
    };
    const handleLogout = () => {
        /* if (userContext) {
             userContext.setUser(null);
         }*/
        //after type asertion dont have to  check for null or undefined
        userContext.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/* 
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
            after type asertion dont have to  check for null or undefined in '"userContext"' 
            But inside "'user'" you have to check because unless user login the data will be not there
            */}
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    );
};
