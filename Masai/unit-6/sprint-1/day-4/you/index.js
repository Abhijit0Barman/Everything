const express = require("express");
const fs = require("fs");

const app = express();

// app.use(express.text()); //middleware
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send("<h1>Hello World</h1>");
  // res.end("<h1>bye World</h1>");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.send("Added the data...");
});

app.get("/students", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data).students);
    }
  });
});

app.get("/instructors", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data).instructors);
    }
  });
});

app.post("/addins", (req, res) => {
  const payload = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  // console.log(data.instructors);
  // res.send("WIP...")
  data.instructors.push(payload);
  // console.log(data.instructors);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("Added the data...");
});

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
