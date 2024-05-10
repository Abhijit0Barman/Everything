const fs = require("fs");

const loggerMiddleware = (req, res, next) => {
  const log = `Method:${req.method}, Route:${req.url}, user-agent:${req.get(
    "user-agent"
  )}\n`;
  fs.appendFile("logs.txt", log, (err) => {
    if (err) {
      console.error(err);
    }
  });
  next()
};


module.exports={loggerMiddleware}