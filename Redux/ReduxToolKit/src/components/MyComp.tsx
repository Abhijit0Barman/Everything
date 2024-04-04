import React from "react";
import { useAppSelector } from "../redux/hooks/hooks";

const MyComp: React.FC = () => {
  const count = useAppSelector((s) => s.counterReducer.value);
  return <h1>MyComp: {count}</h1>;
};

export default MyComp;
