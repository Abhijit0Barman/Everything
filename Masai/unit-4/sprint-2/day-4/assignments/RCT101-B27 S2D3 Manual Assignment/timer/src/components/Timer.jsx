import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count <= 1) {
      clearInterval(timer);
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Timer;
