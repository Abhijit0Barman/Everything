const fs = require("fs");
const os = require("os");

console.log(os.cpus());

fs.writeFileSync("./write.txt", "hello world"); //Sync
const result = fs.readFileSync("./read.txt", "utf-8"); //Sync
console.log(result);

fs.writeFile("./write.txt", "hello world Async", (err) => {}); //Async

fs.readFile("./read.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
}); //Async

fs.appendFileSync("./append.txt", `${new Date().toISOString().split("T")}\n`); //Adding or Replacing data to a file
fs.cpSync("./append.txt", "./copy.txt"); //making copy

fs.unlinkSync("./copy.txt"); //deleting file

// console.log(fs.statSync("./read.txt")); //checking status

// fs.mkdirSync("single");//creating folder
// fs.mkdirSync("dir/v/b", { recursive: true });//Creating multiple nested folder.
