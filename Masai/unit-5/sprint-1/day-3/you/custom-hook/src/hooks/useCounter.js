import { useState } from "react";

export const useCounter=()=>{
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((p) => p + 1);
  };
  const handleReduce = () => {
    setCount((p) => p - 1);
  };
  return { count, handleAdd, handleReduce };
}