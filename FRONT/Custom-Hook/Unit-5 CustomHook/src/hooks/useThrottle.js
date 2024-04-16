import { useRef } from "react";

export const useThrottle = () => {
  let { current: wait } = useRef(false);

  const throttle = (fun) => {
    if (wait === true) {
      return;
    }
    if (wait === false) {
      fun();
      wait = true;
    }
    setTimeout(() => {
      wait = false;
    }, 2000);
  };
  return throttle;
};

/*
import { useRef, useEffect } from "react";

export const useThrottle = () => {
  const wait = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      // Clear the timeout when the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const throttle = (fun) => {
    if (wait.current) {
      return;
    }
    fun();
    wait.current = true;
    timeoutRef.current = setTimeout(() => {
      wait.current = false;
    }, 2000);
  };

  return throttle;
};

 */
