const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const ipAddress =
    req.headers["cf-connecting-ip"] ||
    req.headers["cf-connection-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    null;
  console.log(ipAddress);

  const log = `${Date.now()}: ${req.url} New Req Received ${ipAddress}\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    // console.log(err, "===>", data);
    switch (req.url) {
      case "/":
        res.end("Homepate");
        break;
      case "/about":
        res.end(`<b>about <h1>page</h1></b>`);
        break;
      default:
        res.end("404 Not Found");
    }
  });

  // res.end("hello from server");
});

myServer.listen(8000, () => {
  console.log(`server started at 8000`);
});
