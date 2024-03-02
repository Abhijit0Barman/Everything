const fs = require("fs");
/*
// fs.writeFileSync("./write.txt", "hello world"); //Sync
// const result = fs.readFileSync("./read.txt", "utf-8"); //Sync

fs.writeFile("./write.txt", "hello world Async", (err) => {}); //Async
console.log(result);

fs.readFile("./read.txt", "utf-8", (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }
}); //Async
*/

fs.appendFileSync("./append.txt", `${Date.now()}\n`);
