import React from "react";
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

const UseEffect = () => {
  return (
    <>
      <span>UseEffect:--</span>
    </>
  );
};

export default UseEffect;

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
