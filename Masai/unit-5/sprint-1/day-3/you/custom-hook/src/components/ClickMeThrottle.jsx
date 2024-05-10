import React, { useRef } from "react";
import { useThrottle } from "../hooks/useThrottle";

export const ClickMeThrottle = () => {
  const throttle = useThrottle();
  /*
  let { current: wait } = useRef(false);
  let count=0

  const throttle = (func) => {
    // console.log(++count);
    if (wait===true) {
      return
    }
    if (wait===false) {
      func()
    }
    wait=true
    setTimeout(() => {
      wait=false
    }, 1000);
  };
*/
  const handleApi = () => {
    console.log(`Api Request made...`);
  };

  return (
    <div>
      <button onClick={() => throttle(handleApi)}>Click Me Throttle</button>
    </div>
  );
};
