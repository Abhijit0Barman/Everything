import { useRef } from "react";

export const useThrottle = () => {
  let { current: wait } = useRef(false);
  // let count = 0;

  const throttle = (func) => {
    // console.log(++count);

    if (wait === true) {
      return;
    }

    if (wait === false) {
      func();
    }
    wait = true;

    setTimeout(() => {
      wait = false;
    }, 2000);
  };

  return throttle;
};
