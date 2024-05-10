import { useState } from "react";

const useToggleItems = (arr, index = 0) => {
  const [state, setState] = useState(arr[index]);

  const toggleState = () => {
    setState((p) => {
      const nxtIndex = (p === arr[arr.length - 1])  ?
      0 : arr.indexOf(p) + 1;

      return arr[nxtIndex];
    });
  };

  return [state, toggleState];
};

export { useToggleItems };
