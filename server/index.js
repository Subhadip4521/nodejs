const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()} : ${req.method} : ${
    req.url
    } : New request received\n`;
  
  const myUrl = url.parse(req.url, true);

  fs.appendFile("./log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello");
        break;
      case "/about":
        res.end("Hello about");
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server listening on PORT:8000"));
