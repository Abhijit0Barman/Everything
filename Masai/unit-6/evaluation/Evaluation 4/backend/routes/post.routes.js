const express = require("express");
const { PostModel } = require("../models/post.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postRouter = express.Router();
// postRouter.use(auth)
postRouter.post("/add",async(req,res)=>{
  try {
    const post=new PostModel(req.body)
    await post.save()
    res.status(200).send({msg:"A new post created"})
  } catch (error) {
    res.status(400).send({error:error})
  }
})

postRouter.get("/", async(req,res)=>{
  const {device1,device2}=req.query
  const {userID}=req.body
  const query={}
  if(userID){
    query.userID=userID
  }
  if(device1 && device2){
    query.device={$and:[{device:device1},{device:device2}]}
  }else if(device1){
    query.device=device1
  }else if(device2){
    query.device=device2
  }
  try {
    const posts=await PostModel.find(query)
    res.status(200).json({msg:"User Posts",posts})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
})

postRouter.patch("/update/:postID",async(req,res)=>{
  const {postID}=req.params
  try {
    await PostModel.findByIdAndUpdate({_id:postID},req.body)
    res.status(200).send({msg:`updated successfully ${postID}`})
  } catch (error) {
    res.status(400).send({error:error})
  }
})

postRouter.delete("/update/:postID",async(req,res)=>{
  const {postID}=req.params
  try {
    await PostModel.findByIdAndDelete({_id:postID})
    res.status(200).send({msg:`Deleted successfully ${postID}`})
  } catch (error) {
    res.status(400).send({error:error})
  }
})

module.exports={
  postRouter
}