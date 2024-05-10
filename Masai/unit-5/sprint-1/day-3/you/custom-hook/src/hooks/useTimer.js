import React, { useEffect, useState } from "react";

export const useTimer = (delay) => {
  const [show, setShow] = useState(false);

  let id;

  useEffect(() => {
    id = setInterval(() => {
      setShow((p) => !p);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return show;
};
