const fs = require("fs");
/*
// ===============or=================reading file
fs.readFile("./lecture.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});
*/
// ===============or=================reading file
/*
fs.readFile("./lecture.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/
// ===============or=================reading file
/*
fs.readFile("./lecture.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/

// =============reading file=================
/*
try {
  const data = fs.readFileSync("./lecture.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
console.log("Bye");
*/


// ============writing file===================
/*
fs.writeFile("./text.txt", "the first line in the text file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`data has been put inside the file ..........`);
  }
});

fs.writeFile("./text.txt", "new note ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`data has been put inside the file **********`);
  }
});
*/


// ============writing file overwritten===================
/*
fs.writeFileSync("./text.txt","superman")
console.log("overwritten");
*/


// ============All writing file Added===================
fs.appendFile("./new.txt", "flash \nwonder women", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data has been put inside the file ??????????")
  }
});