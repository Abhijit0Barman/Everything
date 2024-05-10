import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setOnline] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
      // console.log("online");
      setOnline(true);
    } else {
      // console.log("offline");
      setOnline(false);
    }
  }, []);

  return [isUserOnline];
};

export default useOnlineStatus;
