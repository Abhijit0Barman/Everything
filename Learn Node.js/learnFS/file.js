const fs = require("fs");

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

fs.appendFileSync("./append.txt", `${new Date().toISOString().split("T")}\n`);

fs.cpSync("./append.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./read.txt"));

fs.mkdirSync("single");
fs.mkdirSync("dir/v/b", { recursive: true });
