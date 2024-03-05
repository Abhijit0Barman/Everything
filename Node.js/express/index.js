const express = require("express");

const server = express();

server.use(express.json());
//Routes
server.get("/", (req, res) => {
  if (req.url === "favicon.ico") return;
  // res.status(200).json({message:"hello world"});
  res.status(200).end(`hello world`);
});

server.listen(8000, () => {
  console.log(`server is running at 8000`);
});
