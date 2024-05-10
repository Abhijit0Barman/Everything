const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
  const token=req.headers.authorization?.split(" ")[1]
  try {
    if(token){
      jwt.verify(token,process.env.SECRET,(err,decoded)=>{
        if(decoded){
          req.body.userID=decoded.userID
          req.body.name=decoded.name
          next()
        }else{
          res.send({msg:"Incorrect Credential"})
        }
      })
    }else{
      res.send({msg:"You are not authorised"})
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports={auth}