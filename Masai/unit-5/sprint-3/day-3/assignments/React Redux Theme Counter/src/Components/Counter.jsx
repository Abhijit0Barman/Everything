
import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { useSelector } from "react-redux";

const Counter = () => {
  const theme = useSelector((store) => store.themeReducer.theme);

  return (
    <div
      data-testid="counter"
      className={`${theme === 'light' ? 'light_theme' : 'dark_theme'}`} style={{ margin:'auto', padding:'2px',backgroundColor:theme==='light'? 'white':'black', color: theme ==='light'?'#000':'#fff',width:'350px' ,height:'300px' }}
    >
      <h1>Counter</h1>
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default Counter;

