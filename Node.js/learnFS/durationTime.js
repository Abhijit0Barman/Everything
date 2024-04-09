const fs = require("fs");

// Middleware function to log request duration
function durationTime(req, res, next) {
  const startTime = new Date();

  // Override res.end to calculate duration
  const oldEnd = res.end;
  res.end = function () {
    const duration = new Date() - startTime;

    fs.appendFile(
      "duration_log.txt",
      `${method} ${url} - ${duration}ms\n`,
      (err) => {
        if (err) {
          console.error("Error appending to file:", err);
        }
      }
    );
    oldEnd.apply(res, arguments);
  };

  next();
}

module.exports = durationTime;
