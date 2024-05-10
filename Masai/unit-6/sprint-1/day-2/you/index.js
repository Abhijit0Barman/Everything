const os = require("os");
const dns = require("dns");
const crypto = require("crypto");

// console.log(os.freemem());
// console.log(dns);
// console.log(crypto);


// const add=require("./main")
// const [add,del]=require("./main")
const {del,add}=require("./main")

console.log(add(3,3));
console.log(del(3,3));