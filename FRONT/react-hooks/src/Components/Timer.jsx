import { useEffect, useState } from "react";
/*
Using setTimeout and setInterval directly within a React component is considered a side effect 
because it triggers asynchronous behavior outside of the component's rendering process, 
potentially leading to unexpected behavior or memory leaks. 
By encapsulating timer setup and cleanup logic within the useEffect hook, 
you explicitly declare these operations as side effects and ensure they are managed correctly across component lifecycle events.
*/
const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
        clearInterval(timerId); // Cleanup the timer on component unmount
    };
}, []); // Empty dependency array ensures the effect runs only once after initial render


  return (
    <div>
      <h3>Timer : {count}</h3>
    </div>
  );
};

export default Timer;
