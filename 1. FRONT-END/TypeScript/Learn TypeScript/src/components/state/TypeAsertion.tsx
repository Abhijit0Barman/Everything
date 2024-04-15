import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const TypeAsertion = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //We are lying compiler empty obj-type is AuthUser
  //you can use TYPE-ASERTION only if you know user will soon enough logged-in after set-up and allways there will be value you can't Logout
  const handleLogin = () => {
    setUser({
      name: "Abhijit",
      email: "abc@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
