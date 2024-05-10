const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.status(200).send({ error: err });
      } else {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "A new user has been registered" });
      }
    });
  } catch (error) {
    res.status(400).send({ error: err });
  }
});

userRouter.post("/login",async (req,res)=>{
  const {email,password}=req.body
  try {
    const user=await UserModel.findOne({email})
    bcrypt.compare(password, user.password, function(err, result) {
      // result == true
      if(result){
        const token=jwt.sign({userID:user._id,name:user.name},process.env.SECRET)
        res.status(200).send({msg:"Login Successfull",token:token})
      }else{
        res.status(200).send({msg:"Wrong Credential"})
      }
  });
} catch (error) {
  res.status(400).send({error:error})
  }
})

module.exports={
  userRouter
}