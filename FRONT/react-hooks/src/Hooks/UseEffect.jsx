/* eslint-disable */
import React, { useEffect, useState } from "react";
/** SIDE-EFFECTS
 * Network Request
 * Browser API -- Document, Window OUTSIDE OF SCOPE
 * setTimeout, setInterval
 */
const UseEffect = () => {
  const [state, setState] = useState(0);

  console.log(1);
  useEffect(() => {
    console.log(2);
    document.title = `Count ${state}`; // outside  of scope
    fetch(`https://api.github.com/users`) //network request
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [state]);
  console.log(3);
  return (
    <>
      <span>UseEffect:--</span>
      <button onClick={(e) => setState(state + 1)}>Change Title Count</button>
    </>
  );
};

export default UseEffect;
/*
//pure function because its NOT changing something which is outside of its scope & Predictable
//given same input , will always return the same output.
const avengerArray =["ironman","captainamerica"]
function addNew(value,avengerArray){
    return  [...avengerArray , value]
}

console.log(avengerArray)
console.log(addNew('spiderman',avengerArray))
*/

/*
//NOT a Pure Function because it changing something which is outside of its scope & Un-Predictable
// given same inputs, may produce different outputs
const avengerArray =["ironman","captainamerica"]
function addNew(value){
    avengerArray.push(value)
}
addNew('spiderman')
console.log(avengerArray)
*/
