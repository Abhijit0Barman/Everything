const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const DB_FILE = "db.json";
app.use(bodyParser.json());

const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
const writeDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data));

app.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.todos);
});

app.post("/", (req, res) => {
  const { id, task, status } = req.body;

  if (typeof id === "number") {
    const db = readDB();
    db.todos.push({ id, task, status });
    writeDB(db);

    res.status(200).json(db.todos);
  }
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task, status } = req.body;
  const db = readDB();
  const index = db.todos.findIndex((elem) => elem.id === id);

  if (index !== -1) {
    db.todos[index] = { id, task, status };
    writeDB(db);
    res.status(200).json(db.todos);
  } else {
    res.status(400).send("Invalid argument");
  }
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) && id < 0) {
    return res.status(400).send("Invalid argument");
  }

  const db = readDB();
  const updateData = db.todos.filter((elem) => elem.id !== id);

  if (db.todos.length !== updateData.length) {
    db.todos = updateData;
    writeDB(db);
    res.status(200).json(db.todos);
  } else {
    res.status(400).send("Invalid argument");
  }
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

module.exports = app;
