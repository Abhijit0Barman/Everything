const timeLogger=(req, res, next) => {
  //logic
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();
  console.log(`The response time is ${endTime-startTime}ms`);
}

module.exports=timeLogger