

function Outer() {
  let res = "hello"

  function Inner(x) {
    res = x
  }

  function Print() {
    console.log(res);
  }
  return { Inner, Print }
}

let val = Outer()

val.Print()
val.Inner('ggg')
val.Print()

// Number
// String 
// Boolean
// Undefined
// Null
// NaN
// Symbol


a = { a: { b: { c: 1 } } }
let c = a
c.a = 2

console.log(a);
// {a:{b:{c:1}}}
console.log(c)
// {a:2}