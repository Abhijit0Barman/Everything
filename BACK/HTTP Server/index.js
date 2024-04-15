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

  const log = `method ${req.method}||date ${Date.now()}||url ${
    req.url
  }||ip ${ipAddress}\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        if (req.method === "GET") res.end("Homepage");
        break;
      case "/about":
        res.end(`<b>about <h1>page</h1></b>`);
        break;
      case "/signup": {
        if (req.method === "GET") res.end("This is a GET method call");
        else if (req.method === "POST") res.end("This is a POST method call");
        else if (req.method === "PUT") res.end("This is a PUT method call");
        break;
      }
      default:
        res.end("404 Not Found");
    }
  });

  // res.end("hello from server");
});

myServer.listen(8000, () => {
  console.log(`server started at 8000`);
});
