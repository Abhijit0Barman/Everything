//if we do give dot(.) then it will search for the file in our current project directory/folder.
const anonymous = require("./anonymous");
const { add, multiply } = require("./anonymous");
//if we DON'T give dot(.) it will try find in node packages
const { sub, divide } = require("./normalExports"); //if we want to import only some of the functions from the module then we can use curly

console.log(`anonymous=>`, add(5, 5));
console.log(`anonymous=>`, multiply(5, 5));
console.log(`anonymous=>`, anonymous.multiply(5,5));
console.log(`-----------------------------`);
console.log(`normalExports=>`, sub(5,5));
console.log(`normalExports=>`, divide(5,5));
