const validatorMiddleware=(req,res,next)=>{
  const role=req.params.role
  const pass=req.params.pass
  if(role!="leader" || pass!=4534){
    res.json({message:"Not Authorized"})
  }else{
    next()
  }
}

module.exports={validatorMiddleware}