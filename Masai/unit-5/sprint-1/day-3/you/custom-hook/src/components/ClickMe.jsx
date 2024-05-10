import React, { useRef } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const ClickMe = () => {
  const debounce = useDebounce();

  const handleApi = () => {
    console.log(`Api Request made...`);
  };

  // let { current: id } = useRef();

  // const debounce = (fun) => {
  //   if (id) {
  //     clearTimeout(id);
  //   }

  //   id = setTimeout(() => {
  //     fun();
  //   }, 2000);
  // };

  return (
    <div>
      <button onClick={() => debounce(handleApi)}>Click Me Debounce</button>
    </div>
  );
};
