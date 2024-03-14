// const users = require("./MOCK_DATA.json");
const express = require("express");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user.routes");
const UserModel = require("./models/user.model");

const app = express();
const PORT = 8000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: false })); //   OR    app.use(express.json());
app.use(logReqRes("log.txt"));
app.use("/api/users", userRouter);
/*
app.use((req, res, next) => {
  console.log(`Middleware-2`);
  return res.end("bye bye")
  next();
});
*/

// Routes ServerSideRendering
app.get("/users", async (req, res) => {
  const allUsers = await UserModel.find({});
  const html = `
  <ul>
  ${allUsers
    .map((user) => `<li> ${user.firstName}-${user.email} </li>`)
    .join("")}
</ul>
`;
  return res.send(html);
});

//default route
app.get("/", (req, res) => {
  if (req.url === "favicon.ico") return;
  res.setHeader("X-devlopBy", "Abhijit"); //Custom Header by using "X"
  return res.status(200).json({ message: "hello world" });
});

app.listen(PORT, async () => {
  try {
    await connectMongoDb("mongodb://127.0.0.1:27017/piyushChannel");
    console.log(`MongoDB Connected & App is running at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
