require("dotenv").config();
const express = require("express");
const { auth } = require("./middleware/auth.middleware");
const jwt = require("jsonwebtoken");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");

const PORT = process.env.SERVER_PORT | 3000;

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes",auth, noteRouter);
app.use("/", (req, res) => res.send("<h1>😄😁🥰</h1>"));

app.get("/movies", auth, (req, res) => {
  try {
    res.status(200).send({ msg: "Welcome to the restricted route" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/series", auth, (req, res) => {
  try {
    res.status(200).send({ msg: "Welcome to the restricted route" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/refresh", (req, res) => {
  const refresh_token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(refresh_token, "anything");
  if (decoded) {
    const token = jwt.sign({ email: decoded.email }, "masai", {
      expiresIn: "7d",
    });
    res.send(token);
  } else {
    res.send({ msg: "Invalid Refresh Token!" });
  }
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connected & Server is running at port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
