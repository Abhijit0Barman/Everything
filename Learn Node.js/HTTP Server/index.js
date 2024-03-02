const http = require("http");

const myServer = http.createServer((req, res) => {
  const ipAddress = req.socket.remoteAddress;
  const clientIP =
    req.headers["cf-connecting-ip"] ||
    req.headers["cf-connection-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    null;
  const clientIP2 = req.connection.remoteAddress;
  console.log(ipAddress);
  console.log(clientIP);
  console.log(clientIP2);
  res.end("hello from server");
});

myServer.listen(8000, () => {
  console.log(`server started at 8000`);
});
