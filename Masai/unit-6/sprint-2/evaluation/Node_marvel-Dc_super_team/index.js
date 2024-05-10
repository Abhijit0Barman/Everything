// Do not forget to export the server.
// e.g => module.exports = server;

const express = require("express");
const fs = require("fs");
const {loggerMiddleware} = require("./middleware/logger");
const {validatorMiddleware} = require("./middleware/validator");

const server = express();

server.use(express.json());
server.use(loggerMiddleware)

const takeData = () => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
const writeData = (data) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

server.get("/", (req, res) => {
  res.send(
    "<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>"
  );
});

server.post("/marvel/addnew", (req, res) => {
  const newHero = req.body;
  const db = takeData();
  db.marvel.push(newHero);
  writeData(db);
  res.send(`New superhero has been added`);
});

server.post("/dc/addnew", (req, res) => {
  const newHero = req.body;
  const db = takeData();
  db.dc.push(newHero);
  writeData(db);
  res.send(`New superhero has been added`);
});

server.get("/marvel", (req, res) => {
  const db = takeData();
  res.json(db.marvel);
});

server.get("/dc", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf-8");
  res.json(JSON.parse(data).dc);
});


server.get('/marvel/:id',(req,res)=>{
  const id=+req.params.id
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  const hero=data.marvel.find((hero)=>hero.id===id)
  res.send(hero)
})

server.get('/dc/:id',(req,res)=>{
  const id=+req.params.id
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  const hero=data.dc.find((hero)=>hero.id===id)
  res.send(hero)
})

// server.patch('/marvel/update/:id',validatorMiddleware,(req,res)=>{

// })

// server.patch('/dc/update/:id',validatorMiddleware,(req,res)=>{

// })

server.delete('/marvel/delete/:id',validatorMiddleware,(req,res)=>{
const id=+req.params.id
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
const hero=data.marvel.find((hero)=>hero.id===id)
if(hero){
  let update=data.marvel.filter(gero=>gero.id!==id)
  res.json(data.update)
  res.send(`Deleted Character Details`)
}else{
  res.send({message:""})
}
})

server.delete('/dc/delete/:id',validatorMiddleware,(req,res)=>{
  const id=+req.params.id
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  const hero=data.dc.find((hero)=>hero.id===id)
  if(hero){
    let update=data.marvel.filter(gero=>gero.id!==id)
    res.json(data.update)
    res.send(`Deleted Character Details`)
  }else{
    res.send({message:""})
  }
})

// server.get('/winningteam',(req,res)=>{

// })

server.listen(3000, () => {
  console.log(`Server is running at 3000`);
});

module.exports = server;
