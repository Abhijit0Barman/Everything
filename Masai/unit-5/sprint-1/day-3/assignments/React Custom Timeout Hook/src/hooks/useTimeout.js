import { useState, useEffect } from "react";
const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  let id;
  useEffect(() => {
    id = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return { ready };
};

export default useTimeout;
