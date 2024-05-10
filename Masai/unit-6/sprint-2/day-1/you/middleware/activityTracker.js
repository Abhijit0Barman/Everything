const fs = require("fs");

const activityTracker = (req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `ROUTE: ${req.url} | METHOD: ${req.method} | TIME: ${Date()}\n`
  );
  next();
};

module.exports = { activityTracker };
