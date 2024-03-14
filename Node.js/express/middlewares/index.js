const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      // "./log.txt",
      filename,
      `${req.ip} ${new Date().toISOString()} ${req.method} ${req.url}||${
        req.path
      }\n`,
      (err, data) => {}
    );
    next();
  };
}

module.exports = {
  logReqRes,
};
