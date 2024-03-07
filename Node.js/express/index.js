const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

//MIDDLEWARE
// app.use(express.json());
//  or
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `${req.ip} ${new Date().toISOString()} ${req.method} ${req.url}||${
      req.path
    }\n`,
    (err, data) => {}
  );
  next();
});
// app.use((req, res, next) => {
//   console.log(`Middleware-2`);
//   return res.end("bye bye")
//   // next();
// });

//Routes ServerSideRendering
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
}}
</ul>
`;
  return res.send(html);
});

//Routes ClientSideRendering
app.get("/", (req, res) => {
  // if (req.url === "favicon.ico") return;
  // res.status(200).json({message:"hello world"});
  res.setHeader("X-devlopBy", "Abhijit"); //Custom Header by using "X"
  return res.status(200).end(`hello world`);
});

app.get("/api/users", (req, res) => {
  return res.send(users);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  const { first_name, last_name, email, gender, job_title } = body;
  if (!body || !job_title || !gender || !email || !last_name || !first_name) {
    return res.status(400).json({ error: "All fields is required" });
  }
  // console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json({ post: "successfull", id: users.length });
  });
  // return res.json({ post: "mehtod" });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user)return res.status(404).json({err:"Does Not Exist"})
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  });

app.listen(8000, () => {
  console.log(`App is running at 8000`);
});

/* BECAUSE OF "SAME ROUTE" WE ARE GONNA MERGE TOGATHER

    //GET request's
    app.get("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    
    //PATCH request's
    app.patch("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    
    //DELETE request's
    app.delete("/api/users/:id", (req, res) => {
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
    });
    */
