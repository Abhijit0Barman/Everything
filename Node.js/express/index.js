const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
// app.use(express.json());

//Routes SSR
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
}}
</ul>
`;
  return res.send(html);
});

//Routes CSR
app.get("/", (req, res) => {
  // if (req.url === "favicon.ico") return;
  // res.status(200).json({message:"hello world"});
  res.status(200).end(`hello world`);
});

app.get("/api/users", (req, res) => {
  return res.send(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  return res.send({ post: "mehtod" });
});
app.listen(8000, () => {
  console.log(`App is running at 8000`);
});
