const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : New request received\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    res.end("Hello from server");
  });
});

myServer.listen(8000, ()=> console.log("Server listening on PORT:8000"));
