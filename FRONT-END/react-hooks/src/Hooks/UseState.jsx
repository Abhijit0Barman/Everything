import React, { useState } from "react";
/*
`
let div = document.createElement('div')
console.log(div) // it will return DOM Element
`

`
let div = React.createElement('div',{},null)
console.log(div) // it will return object which represent DOM Element
`

1. useState is kind of async
2. useState batches update
3. setState can take callback function, which will use the value from the react store internally 
*/
const UseState = () => {
  const [count, setCount] = useState(0);

  const handleInternal = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const handleNormal = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  console.log(count);
  return (
    <><span>UseState:--</span>
      <button onClick={() => handleInternal()}>
        Internal: count is {count}
      </button>
      <button onClick={handleNormal}>Normal: count is {count}</button>
    </>
  );
};

export default UseState;
