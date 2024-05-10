const express = require("express");
const timeLogger = require("./middleware/timeLogger");
const { activityTracker } = require("./middleware/activityTracker");

const app = express();

// app.use(timeLogger);
app.use(activityTracker);

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.get("/users", (req, res) => {
  res.send("User Data...");
});

app.get("/about", (req, res) => {
  res.send("About Page...");
});

app.listen(8080, () => console.log("Server is running at port 8080"));
