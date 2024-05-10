// export server
// module.exports = app

const express = require("express");
const fs = require("fs");
const os = require("os");
const dns = require("dns");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send("<h1>Welcome to the Home Page</h1>");
});

const takeData = () => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return { students: [], instructors: [] };
  }
};

app.post("/add/student", (req, res) => {
  const { age, location, tickets } = req.body;
  const newObj = {
    id: os.userInfo().uid,
    name: os.userInfo().username,
    age,
    location,
    tickets,
  };

  const database = takeData();
  database.students.push(newObj);
  fs.writeFileSync("./db.json", JSON.stringify(database));
  // res.send("Added the student data...");
  res.json(database.students);
});

app.post("/add/instructor", (req, res) => {
  const { age, location, sub, exp } = req.body;
  const newObj = {
    id: os.userInfo().uid,
    name: os.userInfo().username,
    age,
    location,
    sub,
    exp,
  };

  const database = takeData();
  database.instructors.push(newObj);
  fs.writeFileSync("./db.json", JSON.stringify(database));
  // res.send("Added the instructor data...");
  res.json(database.instructors);
});

app.get("/students", (req, res) => {
  const database = takeData();
  res.json(database.students);
});

app.get("/instructors", (req, res) => {
  const database = takeData();
  res.json(database.instructors);
});

app.get("/tickets", (req, res) => {
  const database = takeData();
  const totalTickets = database.students.reduce(
    (a, c) => a + c.tickets.length,
    0
  );
  // res.json(database.instructors);
  res.send(`Total number of tickets in the system are ${totalTickets}`);
});

app.get("/address", (req, res) => {
  dns.lookup("masaischool.com", (err, addresses, family) => {
    if (err) {
      res.end(err)
    } else {
      res.send(
        `URL: masaischool.com IP Address: ${addresses} Family: IPv${family}`
      );
    }
  });
});

app.listen(8080, () => {
  console.log("server running... 8080");
});

module.exports = app;
