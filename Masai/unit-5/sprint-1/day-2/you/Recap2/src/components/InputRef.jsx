import React, { useEffect, useRef } from "react";

export const InputRef = () => {
  const ref = useRef([]);

  useEffect(() => {
    ref.current[0].focus();
    console.log(ref);
  }, []);

  return (
    <div>
      <input type="text" ref={(e) => (ref.current[0] = e)} />
      <input type="text" ref={(e) => (ref.current[1] = e)} />
      <input type="text" ref={(e) => (ref.current[2] = e)} />
      <input type="text" ref={(e) => (ref.current[3] = e)} />
    </div>
  );
};

// export const InputRef = () => {
//   // const ref = useRef(0);
//   let { current } = useRef(0);

//   const handleAdd = () => {
//     ++current;
//     console.log(current);
//   };
//   const handleReduce = () => {
//     --current;
//     console.log(current);
//   };

//   return (
//     <div>
//       <h2>Current: {current}</h2>
//       <button onClick={handleAdd}>Add</button>{" "}
//       <button onClick={handleReduce}>Reduce</button>
//     </div>
//   );
// };
