import React, { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";

export const Timer1 = () => {
  const show = useTimer(1000);

  return (
    <div>
      <h2>Timer1</h2>
      {show && <h1>Timer-1 Executed...</h1>}
    </div>
  );
};
